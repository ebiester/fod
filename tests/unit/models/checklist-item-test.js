import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('checklist-item', 'ChecklistItem', {
  needs: ['model:checklist', 'model:vehicle']
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});

test('belongs to a checklist', function() {
  var ChecklistItem = this.store().modelFor('checklist-item');
  var relationship = Ember.get(ChecklistItem, 'relationshipsByName').get('checklist');

  equal(relationship.key, 'checklist');
  equal(relationship.kind, 'belongsTo');
});
