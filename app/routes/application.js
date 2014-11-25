import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    startOver: function() {
      this.transitionTo('index');
    }
  }
});

export default ApplicationRoute;
