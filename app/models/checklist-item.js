import DS from 'ember-data';

var ChecklistItem = DS.Model.extend({
  checklist: DS.belongsTo('checklist'),
  complete: DS.attr('boolean'),
  completedBy: DS.attr('string'),
  summary: DS.attr('string')
});

ChecklistItem.reopenClass({
  FIXTURES: [
    { id: 1, checklist: 1, complete: false, summary: 'Damage check' },
    { id: 2, checklist: 1, complete: false, summary: 'Cleaned' },
    { id: 3, checklist: 1, complete: false, summary: 'Full gas' },
    { id: 4, checklist: 1, complete: false, summary: 'Upkitted' },
    { id: 5, checklist: 1, complete: false, summary: 'Parked on the line' },
  ]
});

export default ChecklistItem;
