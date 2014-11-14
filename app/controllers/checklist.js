import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),

  actions: {
    sendToZipcar: function() {
      this.set('isReady', true);
      this.transitionToRoute('vehicle',
          this.model);
    }
  }
});
