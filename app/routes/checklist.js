import Ember from 'ember';
import ChecklistItem from 'fod/models/checklist-item';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('checklist', params.checklist_id);
  }
  // model: function(params) {
  //   var store = this.store;
  //   return this._super(params).then(function(checklist) {
  //     if (checklist.get('checklistItems.length') === 0) {
  //       ChecklistItem.FIXTURES.copy().forEach(function(item) {
  //         item.checklist = checklist;
  //         store.createRecord('checklistItem', item);
  //       });
  //     }

  //     return checklist;
  //   });
  // }
});
