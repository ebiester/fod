import DS from 'ember-data';

var Reservation = DS.Model.extend({
  name: DS.attr(),
  startTime: DS.attr('date'),

  formattedStartTime: function() {
    return moment(this.get('startTime')).format('h:mm A');
  }.property('startTime')
});

Reservation.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Bell-Upp, Gailyn', startTime: '2015-04-01T13:30:00' }
  ]
});

export default Reservation;
