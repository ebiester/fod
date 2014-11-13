// app/adapters/application.js
import Ember from "ember";
import DS from "ember-data";

export default DS.FixtureAdapter.extend({
  queryFixtures: function(fixture, query, type) {
    return fixture.filterBy('license', query.license);
  }
});
