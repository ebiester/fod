import Ember from 'ember';
import UserAwareController from 'fod/mixins/user-aware-controller';

export default Ember.ObjectController.extend(UserAwareController, {
  actions: {
    sendToAvis: function() {
      this.set('isReady', false);
    }
  }
});
