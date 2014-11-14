import Ember from 'ember';
import User from 'fod/models/user';

export default Ember.ObjectController.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),
  users: User.FIXTURES,

  actions: {
    searchLicense: function() {
      var license = this.get('license');
      var vehicle_promise = this.store.find('vehicle',
        {license: license});
      var controller = this;
      vehicle_promise.then(function(vehicleQuery) {
        controller.transitionToRoute('vehicle',
          vehicleQuery.get('firstObject'));
      });
    }
  },

  fileUpdated: function() {
    if (!Ember.isNone(this.get('filename'))) {
      this.set('license', 'GRB4255');
    }
  }.observes('filename')
});
