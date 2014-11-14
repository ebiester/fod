import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr()
});

User.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Eric'},
    {id: 2, name: 'Steve'},
    {id: 3, name: 'Stuart'},
    {id: 4, name: 'Alex'},
  ]
});

export default User;
