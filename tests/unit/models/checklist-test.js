import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('checklist', 'Checklist', {
  // Specify the other units that are required for this test.
  needs: ['model:vehicle', 'model:checklist-item']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
