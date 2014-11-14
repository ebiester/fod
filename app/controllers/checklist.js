import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    toggleVehicle: function() {
      this.set('isReady', true);
      this.transitionToRoute('vehicle',
          this.model);
    }
  }
});
