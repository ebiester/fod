import Ember from 'ember';

export default Ember.Mixin.create({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser')
});
