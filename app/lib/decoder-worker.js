import Ember from 'ember';

var DecoderWorkerWrapper = Ember.Object.extend({
  worker: null,
  canvas: null,
  context: null,
  workerCount: 2,
  scannedText: null,
  canvasWidth: Ember.computed.alias('canvas.width'),
  canvasHeight: Ember.computed.alias('canvas.height'),
  promise: null,

  init: function() {
    var worker = new Worker('js/DecoderWorker.js');
    this.set('worker', worker);

    this._initializeCanvas(640, 480);
    worker.onmessage = this._onmessage.bind(this);
  },

  processImage: function(file) {
    this._updateCanvas(file);
    this.decoderCommand('normal');
    var self = this;
    return new Promise(function(resolve, reject) {
      self.set('promise', { resolve: resolve, reject: reject });
    });
  },

  decoderCommand: function(cmd) {
    this.get('worker').postMessage({
      ImageData: this.get('imageData'),
      Width: this.get('canvasWidth'),
      Height: this.get('canvasHeight'),
      cmd: cmd
    });
  },

  _onmessage: function(e) {
    if (e.data.finished) {
      this.decrementProperty('workerCount');
      if(this.get('workerCount')) {
        if(Ember.isNone(this.get('scannedText'))) {
          this.decoderCommand('flip');
        } else {
          this.decrementProperty('workerCount');
        }
      }
    }

    if (e.data.success) {
      var result = e.data.result[0].split(':')[1].trim();
      this.get('promise').resolve(result);
    } else {
      if(Ember.isNone(this.get('scannedText')) && this.get('workerCount') === 0) {
        this.get('promise').reject(new Error('Decoding failed.'));
      }
    }
  },

  imageData: function() {
    var context = this.get('context');
    return context.getImageData(0, 0, this.get('canvasWidth'), this.get('canvasHeight')).data;
  }.property('context', 'canvasWidth', 'canvasHeight'),

  _updateCanvas: function(file) {
    var canvas = this.get('canvas');
    var context = this.get('context');
    var img = document.createElement('img');
    img.src = file;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  },

  _initializeCanvas: function(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    this.set('canvas', canvas);
    this.set('context', canvas.getContext('2d'));
  },
});

export default DecoderWorkerWrapper;
