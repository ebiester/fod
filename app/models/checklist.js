import DS from 'ember-data';

var Checklist = DS.Model.extend({
  vehicle: DS.belongsTo('Vehicle'),
  checklistItems: DS.hasMany('checklist-item'),

  notReady: function() {
    return !Ember.isEmpty(this.get('checklistItems').filterBy('complete', false));
  }.property('checklistItems.@each.complete')
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
