import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('checklist-item', 'ChecklistItem', {
  // Specify the other units that are required for this test.
  needs: ['model:checklist', 'model:vehicle']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
