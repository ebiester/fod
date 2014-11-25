import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('vehicle', { path: '/vehicles/:vehicle_id' });
  this.resource('checklist', { path: '/checklists/:checklist_id' });
});

export default Router;
