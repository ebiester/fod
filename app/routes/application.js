import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    dashboard: function() {
      this.transitionTo('dashboard');
    }
  }
});

export default ApplicationRoute;
