import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var models = {
      reservations: this.store.find('reservation'),
      vehicles: this.store.find('vehicle')
    };
    return Ember.RSVP.hash(models);
  }
});
