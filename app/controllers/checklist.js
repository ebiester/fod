import Ember from 'ember';
import UserAwareController from 'fod/mixins/user-aware-controller';

export default Ember.Controller.extend(UserAwareController, {
  actions: {
    checklistItemToggled: function(item) {
      // var user = item.get('complete') ? this.get('currentUser') : null;
      // item.set('completedBy', user);
    },

    sendToZipcar: function() {
      var controller = this;
      this.get('model.vehicle').then(function(vehicle) {;
        vehicle.set('fleet', 'Zipcar');
        vehicle.save().then(function() {
          controller.transitionToRoute('dashboard');
        });
      });
    }
  }
});
