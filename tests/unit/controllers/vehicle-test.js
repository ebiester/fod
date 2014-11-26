import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:vehicle', 'VehicleController', {
  needs: ['controller:session', 'model:vehicle']
});

test('sendToAvis action sets vehicle readiness to false', function() {
  expect(2);

  var controller = this.subject();
  controller.set('model', { isReady: true });
  equal(controller.get('isReady'), true);

  controller.send('sendToAvis');

  equal(controller.get('isReady'), false);
});
