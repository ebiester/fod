import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('checklist', 'Checklist', {
  needs: ['model:vehicle', 'model:checklist-item']
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});

test('belongs to a vehicle', function() {
  var Checklist = this.store().modelFor('checklist');
  var relationship = Ember.get(Checklist, 'relationshipsByName').get('vehicle');

  equal(relationship.key, 'vehicle');
  equal(relationship.kind, 'belongsTo');
});

test('has a list of checklist items', function() {
  var Checklist = this.store().modelFor('checklist');
  var relationship = Ember.get(Checklist, 'relationshipsByName').get('checklistItems');

  equal(relationship.key, 'checklistItems');
  equal(relationship.kind, 'hasMany');
});

test('not ready when any item is incomplete', function() {
  var item1, item2;
  var store = this.store();
  var checklist;
  Ember.run(function() {
    checklist = store.createRecord('checklist', {});
    item1 = store.createRecord('checklist-item', { checklist: checklist, complete: true });
    item2 = store.createRecord('checklist-item', { checklist: checklist, complete: false });
  });

  equal(checklist.get('notReady'), true);

  Ember.run(function() { item2.toggleProperty('complete'); });
  equal(checklist.get('notReady'), false);
});
