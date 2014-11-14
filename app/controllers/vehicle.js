import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),

  actions: {
    sendToAvis: function() {
      console.log("sending to avis")
      this.set('isReady', false);
    }
  }
});
