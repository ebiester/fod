import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('vehicle', 'Vehicle', {
  needs: ['model:checklist', 'model:checklist-item']
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});

test('has a checklist', function() {
  var Vehicle = this.store().modelFor('vehicle');
  var relationship = Ember.get(Vehicle, 'relationshipsByName').get('checklist');

  equal(relationship.key, 'checklist');
  equal(relationship.kind, 'belongsTo');
  equal(relationship.options.async, true);
});

test('currentFleet is Zipcar when ready, or Avis when not', function() {
  var model = this.subject();

  Ember.run(function() { model.set('isReady', false); });
  equal(model.get('currentFleet'), 'Avis');

  Ember.run(function() { model.set('isReady', true); });
  equal(model.get('currentFleet'), 'Zipcar');
});

