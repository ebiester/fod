import Ember from 'ember';
import User from 'fod/models/user';
import UserAwareController from 'fod/mixins/user-aware-controller';

export default Ember.ObjectController.extend(UserAwareController, {
  needs: ['barcode-scanner'],
  scanner: Ember.computed.alias('controllers.barcode-scanner'),
  users: User.FIXTURES,
  scannedText: null,
  
  inputTypes: [
    { id: 1, text: 'License Plate', modelProperty: 'license' },
    { id: 2, text: 'MVA ID', modelProperty: 'mvaId' },
  ],
  selectedType: null,

  actions: {
    findVehicle: function() {
      var controller = this;
      this.queryForVehicle().then(function(vehicleQuery) {
        controller.transitionToRoute('vehicle',
          vehicleQuery.get('firstObject'));
      });
    },

    imageScanned: function(file, type) {
      if (type === 'license') {
        this.set('selectedType', this.get('inputTypes')[0]);
        // hack
        this.set('scannedText', 'GRB4255');
      } else if (type === 'mva') {
        this.get('scanner').processImage(file).then(function(text) {
          this.set('scannedText', text);
        }.bind(this));
        this.set('selectedType', this.get('inputTypes')[1]);
      }
    }
  },

  queryForVehicle: function() {
    var identifier = this.get('scannedText');
    var property = this.get('selectedType.modelProperty');
    var params = {};
    params[property] = identifier;
    return this.store.find('vehicle', params);
  },
});
