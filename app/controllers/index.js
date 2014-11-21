import Ember from 'ember';
import User from 'fod/models/user';

export default Ember.ObjectController.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),
  users: User.FIXTURES,
  mvaFile: null,

  actions: {
    searchLicense: function() {
      var controller = this;
      this.findVehicle().then(function(vehicleQuery) {
        controller.transitionToRoute('vehicle',
          vehicleQuery.get('firstObject'));
      });
    },
    imageScanned: function(file) {
      this.set('mvaFile', file);
    }
  },

  findVehicle: function() {
    var license = this.get('license');
    var mvaId = this.get('mvaId');
    var params = {};
    if (!Ember.isEmpty(license)) {
      params.license = license;
    } else if (!Ember.isEmpty(mvaId)) {
      params.mvaId = mvaId;
    }

    console.log(params);
    return this.store.find('vehicle', params);
  },

  fileUpdated: function() {
    if (!Ember.isNone(this.get('filename'))) {
      this.set('license', 'GRB4255');
    }
  }.observes('filename'),

  mvaId: null,
  mvaFileUpdated: function() {
    var file = this.get('mvaFile');
    console.log(file);
    var worker = this.get('worker');
    var canvas = this.get('canvas');
    var context = this.get('context');
    var img = document.createElement('img');
    img.src = file;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    this.set('resultArray', []);
    this.set('workerCount', 2);
    worker.postMessage({ImageData: context.getImageData(0, 0, canvas.width, canvas.height).data, Width: canvas.width, Height: canvas.height, cmd: 'normal'});
  }.observes('mvaFile'),

  worker: null,
  canvas: null,
  workerCount: 2,
  resultArray: [],
  context: null,
  setupWorker: function() {
    console.log('setting up worker');
    var canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    var worker = new Worker('js/DecoderWorker.js');
    var self = this;
    var resultArray = this.get('resultArray');
    this.set('worker', worker);
    this.set('canvas', canvas);
    this.set('context', context);

    worker.onmessage = function(e) {
      if(e.data.success === "log") {
          console.log(e.data.result);
          return;
      }
      if(e.data.finished) {
          self.decrementProperty('workerCount');
          if(self.get('workerCount')) {
              if(resultArray.length === 0) {
                  worker.postMessage({ImageData: context.getImageData(0,0,canvas.width,canvas.height).data, Width: canvas.width, Height: canvas.height, cmd: "flip"});
              } else {
                  self.decrementProperty('workerCount');
              }
          }
      }
      if(e.data.success){
          var tempArray = e.data.result;
          for(var i = 0; i < tempArray.length; i++) {
              if(resultArray.indexOf(tempArray[i]) === -1) {
                  resultArray.push(tempArray[i]);
              }
          }
          console.log('RESULT: ', resultArray.join("\n"));
          self.set('mvaId', e.data.result[0].split(':')[1].trim()); // lol
      }else{
          if(resultArray.length === 0 && self.get('workerCount') === 0) {
            console.log("Decoding failed.");
          }
      }
    };
  }.on('init')
});
