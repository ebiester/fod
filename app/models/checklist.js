import DS from 'ember-data';

var Checklist = DS.Model.extend({
  vehicle: DS.belongsTo('Vehicle', {async: true}),
  damage_checked: DS.attr('boolean'),
  damage_checked_by: DS.attr(),
  cleaned: DS.attr('boolean'),
  cleaned_by: DS.attr(),
  gas_checked: DS.attr('boolean'),
  gas_checked_by: DS.attr(),
  upkitted: DS.attr('boolean'),
  upkitted_by: DS.attr(),
  parked_on_the_line: DS.attr('boolean'),
  parked_on_the_line_by: DS.attr(),

  notReadyToToggle: function() {
    var readyToToggle = this.get('damage_checked') &&
        this.get('cleaned') &&
        this.get('gas_checked') &&
        this.get('upkitted') &&
        this.get('parked_on_the_line');

    return !readyToToggle;
  }.property('damage_checked',
    'cleaned',
    'gas_checked',
    'upkitted',
    'parked_on_the_line')
});

Checklist.reopenClass({
  FIXTURES: [
  {id: 1,
   vehicle: 1},
  {id: 2,
   vehicle: 2},
  {id: 3,
   vehicle: 3}
  ]
});

export default Checklist;
