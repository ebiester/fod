import Ember from 'ember';
import User from 'fod/models/user';

export default Ember.Controller.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),
  users: User.FIXTURES
});
