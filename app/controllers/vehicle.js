import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    sendToAvis: function() {
      console.log("sending to avis")
      this.set('isReady', false);
    }
  }
});
