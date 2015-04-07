import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var models = {
      location: this.store.find('location', 1),
      // reservations: this.store.find('reservation'),
      // vehicles: this.store.find('vehicle')
    };
    return Ember.RSVP.hash(models);
  },

  setupController: function(controller, model) {
    controller.set('location', model.location);
    controller.set('allReservations', model.location.get('reservations'));
    controller.set('vehicles', model.location.get('vehicles'));
  },

  actions: {
    editVehicle: function(vehicle) {
      this.transitionTo('vehicle', vehicle);
    }
  }
});
