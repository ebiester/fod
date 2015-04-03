import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var models = {
      reservations: this.store.find('reservation'),
      vehicles: this.store.find('vehicle')
    };
    return Ember.RSVP.hash(models);
  },

  setupController: function(controller, model) {
    controller.set('allReservations', model.reservations);
    controller.set('vehicles', model.vehicles);
  },

  actions: {
    editVehicle: function(vehicle) {
      this.transitionTo('vehicle', vehicle);
    }
  }
});
