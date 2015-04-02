import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.resource('vehicle', { path: '/vehicles/:vehicle_id' });
  this.resource('checklist', { path: '/checklists/:checklist_id' });
  this.route('Reservation');
  this.route('Dashbaord');
  this.route('Dashboard');
});

export default Router;
