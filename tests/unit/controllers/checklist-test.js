import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:checklist', 'ChecklistController', {
  needs: ['controller:session']
});

test('is user aware', function() {
  expect(1);

  var controller = this.subject();
  var sessionController = controller.get('controllers.session');

  Ember.run(function() {
    sessionController.set('currentUser', Ember.Object.create({ name: 'Test' }));
    
    equal(controller.get('currentUser.name'), 'Test');
  });
});

test('when item is completed, sets the item\'s completeBy user', function() {
  expect(1);

  var controller = this.subject();
  var sessionController = controller.get('controllers.session');
  var user = Ember.Object.create({ name: 'Test' });

  Ember.run(function() {
    sessionController.set('currentUser', user);
  });

  Ember.run(function() {
    var item = Ember.Object.create({ complete: true, completedBy: null });
    controller.send('checklistItemToggled', item);

    equal(item.get('completedBy'), user);
  });
});

test('when the is marked incomplete, sets the completedBy user to null', function() {
  expect(1);

  var controller = this.subject();
  var sessionController = controller.get('controllers.session');
  var user = Ember.Object.create({ name: 'Test' });

  Ember.run(function() {
    sessionController.set('currentUser', user);
  });

  Ember.run(function() {
    var item = Ember.Object.create({ complete: false, completedBy: user });
    controller.send('checklistItemToggled', item);

    equal(item.get('completedBy'), null);
  });
});

