import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', 'IndexController', {
  // Specify the other units that are required for this test.
  needs: ['controller:barcode-scanner', 'controller:session']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
