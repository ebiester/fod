import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:vehicle', 'VehicleController', {
  // Specify the other units that are required for this test.
  needs: ['controller:session']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
