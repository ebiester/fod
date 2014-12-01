import Ember from 'ember';
import UserAwareController from 'fod/mixins/user-aware-controller';

export default Ember.ObjectController.extend(UserAwareController, {
  actions: {
    checklistItemToggled: function(item) {
      var user = item.get('complete') ? this.get('currentUser') : null;
      item.set('completedBy', user);
    },

    sendToZipcar: function() {
      var controller = this;
      this.get('vehicle').then(function(vehicle) {
        vehicle.set('isReady', true);
        vehicle.save();
        controller.transitionToRoute('vehicle', vehicle);
      });
    }
  }
});
