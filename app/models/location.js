import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  vehicles: DS.hasMany('vehicle', { async: true }),
  reservations: DS.hasMany('reservation', { async: true })
});
