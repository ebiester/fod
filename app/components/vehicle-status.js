import Ember from 'ember';

export default Ember.Component.extend({
  boxClass: function() {
    var props = [this.get('vehicle.online'), this.get('vehicle.toggled'), this.get('vehicle.serviced')];
    var trueCount = props.filter(function(e) { return e; }).length;
    if (trueCount === 3) {
      return 'alert alert-success';
    } else if (trueCount > 0) {
      return 'alert alert-warning';
    } else {
      return 'well';
    }
  }.property('vehicle.online', 'vehicle.toggled', 'vehicle.serviced'),

  actions: {
    editVehicle: function() {
      this.sendAction('action', this.get('vehicle'));
    }
  }
});
