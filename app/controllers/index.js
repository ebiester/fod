import Ember from 'ember';
import User from 'fod/models/user';

export default Ember.ObjectController.extend({
  needs: ['session', 'barcode-scanner'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),
  scanner: Ember.computed.alias('controllers.barcode-scanner'),
  users: User.FIXTURES,
  scannedText: null,
  
  inputTypes: [
    { id: 1, text: 'License Plate', modelProperty: 'license' },
    { id: 2, text: 'MVA ID', modelProperty: 'mvaId' },
  ],
  selectedType: null,

  actions: {
    searchLicense: function() {
      var controller = this;
      this.findVehicle().then(function(vehicleQuery) {
        controller.transitionToRoute('vehicle',
          vehicleQuery.get('firstObject'));
      });
    },
    imageScanned: function(file, type) {
      if (type === 'license') {
        this.set('selectedType', this.get('inputTypes')[0]);
        // hack
        this.set('filename', 'fakefakefake');
      } else if (type === 'mva') {
        this.get('scanner').processImage(file).then(function(text) {
          this.set('scannedText', text);
        }.bind(this));
        this.set('selectedType', this.get('inputTypes')[1]);
      }
    }
  },

  findVehicle: function() {
    var identifier = this.get('scannedText');
    var property = this.get('selectedType.modelProperty');
    var params = {};
    params[property] = identifier;
    return this.store.find('vehicle', params);
  },

  fileUpdated: function() {
    if (!Ember.isNone(this.get('filename'))) {
      this.set('scannedText', 'GRB4255');
    }
  }.observes('filename'),
});
