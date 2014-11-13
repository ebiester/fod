import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    searchLicense: function() {
      var vehicle_promise = this.store.find('vehicle', {license: this.get('license')})
      var controller = this;
      vehicle_promise.then(function(vehicleQuery) {
        controller.transitionToRoute('vehicle',
          vehicleQuery.get('firstObject'))
      });
    }
  }
});
