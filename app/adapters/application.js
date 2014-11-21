import DS from "ember-data";

export default DS.FixtureAdapter.extend({
  queryFixtures: function(fixture, query) {
    var name, value;
    for (var prop in query) {
      name = prop;
      value = query[name];
    }

    return fixture.filterBy(name, value);
  }
});
