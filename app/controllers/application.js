import Ember from 'ember';
import User from 'fod/models/user';
import UserAwareController from 'fod/mixins/user-aware-controller';

export default Ember.Controller.extend(UserAwareController, {
  users: User.FIXTURES
});
