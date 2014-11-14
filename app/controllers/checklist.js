import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    sendToZipcar: function() {
      this.set('isReady', true);
      this.transitionToRoute('vehicle',
          this.model);
    }
  }
});
