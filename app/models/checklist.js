import DS from 'ember-data';

var Checklist = DS.Model.extend({
  vehicle: DS.belongsTo('Vehicle'),
  damage_checked: DS.attr('boolean'),
  damage_checked_by: DS.belongsTo('user'),
  cleaned: DS.attr('boolean'),
  cleaned_by: DS.belongsTo('user'),
  gas_checked: DS.attr('boolean'),
  gas_checked_by: DS.belongsTo('user'),
  upkitted: DS.attr('boolean'),
  upkitted_by: DS.belongsTo('user'),

  // readyToToggle: {
  //   return damage_checked &&
  //       cleaned &&
  //       gas_checked &&
  //       upkitted;
  // }
});

Checklist.reopenClass({
  FIXTURES: [
  {id: 1,
   vehicle: 1},
  {id: 2,
   vehicle: 2}
  ]
});

export default Checklist;
