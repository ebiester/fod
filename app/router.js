import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('vehicle', {path: '/vehicle/:vehicle_id'});
  this.resource('checklist', {path: '/checklist/:vehicle_id'});
});

export default Router;
