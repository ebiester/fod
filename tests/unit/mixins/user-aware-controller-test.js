import Ember from 'ember';
import UserAwareControllerMixin from 'fod/mixins/user-aware-controller';

module('UserAwareControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var UserAwareControllerObject = Ember.Object.extend(UserAwareControllerMixin);
  var subject = UserAwareControllerObject.create();
  ok(subject);
});
