import Ember from 'ember';

export default Ember.Controller.extend({
  reservationsNext30Min: function() {
    return this.get('allReservations').slice(0, 2);
  }.property('allReservations.[]'),

  reservationsNext60Min: function() {
    return this.get('allReservations').slice(2);
  }.property('allReservations.[]'),

  sortedVehicles: function() {
    return this.get('vehicles').sortBy('steps').reverse();
  }.property('vehicles.@each.steps')
});
