import {
  test
} from 'ember-qunit';
import startApp from '../helpers/start-app';
import Ember from 'ember';
var App;

module('Integration: Checklist', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('Send to Zipcar fleet', function() {
  expect(2);

  visit('/checklists/2');
  click('.list-group-item');
  click('button.send-to-zipcar');
  andThen(function() {
    equal(currentURL(), '/vehicles/2');
    var fleet = find('label:contains("Current Fleet")').parent().find('span').text();
    equal(fleet, 'Zipcar');
  });
});
