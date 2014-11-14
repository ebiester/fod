import Ember from 'ember';
import User from 'fod/models/user';

export default Ember.Controller.extend({
  currentUser: User.FIXTURES[0]
});
