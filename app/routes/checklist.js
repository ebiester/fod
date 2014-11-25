import Ember from 'ember';
import ChecklistItem from 'fod/models/checklist-item';

export default Ember.Route.extend({
  model: function(params) {
    return this._super(params).then(function(checklist) {
      var store = this.store;
      if (checklist.get('checklistItems.length') === 0) {
        ChecklistItem.FIXTURES.copy().forEach(function(item) {
          item.checklist = checklist;
          store.createRecord('checklistItem', item);
        });
      }

      return checklist;
    }.bind(this));
  }
});
