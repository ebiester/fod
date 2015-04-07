// import DS from "ember-data";

// export default DS.FixtureAdapter.extend({
//   queryFixtures: function(fixture, query) {
//     var name, value;
//     for (var prop in query) {
//       name = prop;
//       value = query[name];
//     }

//     return fixture.filterBy(name, value);
//   }
// });
// import JsonApiAdapter from 'ember-json-api/json-api-adapter';
// export default JsonApiAdapter.extend({
//   host: 'http://localhost:3000'
// });
//

import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});
