import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),

  actions: {
    checklistItemToggled: function(item) {
      var user = item.get('complete') ? this.get('currentUser') : null;
      item.set('completedBy', user);
    },

    sendToZipcar: function() {
      this.set('isReady', true);
      this.transitionToRoute('vehicle', this.model);
    }
  }
});
