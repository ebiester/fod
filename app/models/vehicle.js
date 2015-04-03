import DS from 'ember-data';

var Vehicle = DS.Model.extend({
  vin: DS.attr(),
  license: DS.attr(),
  mvaId: DS.attr(),
  make: DS.attr(),
  vehicleModel: DS.attr(),
  color: DS.attr(),
  description: DS.attr(),
  isReady: DS.attr('boolean'),
  checklist: DS.belongsTo('checklist', { async: true }),
  filename: DS.attr(),

  online: DS.attr(),
  currentFleet: function() {
    return this.get("isReady") ? "Zipcar" : "Avis";
  }.property('isReady'),

  toggled: Ember.computed.equal('currentFleet', 'Zipcar'),
  serviced: Ember.computed.reads('checklist.ready')
});

Vehicle.reopenClass({
   FIXTURES: [
     {id: 1,
      vin: '5NPDH4AE7EH522856',
      license: '117GXT',
      mvaId: '66889093',
      make: 'Hyundai',
      vehicleModel: 'Elantra',
      color: 'Yellow',
      description: 'Mongoose',
      isReady: true,
      checklist: 1},
     {id: 2,
      vin: '5NPDH4AE7EH522857',
      license: '117GXH',
//      mvaId: '66889094',
      mvaId: '70119744',
      make: 'Toyota',
      vehicleModel: 'Carolla',
      color: 'Silver',
      description: 'Sanden',
      isReady: false,
      checklist: 2},
      {id: 3,
      vin: '5NPDH4AE7EH522857',
      license: 'GRB4255',
      mvaId: '66889094',
      make: 'Honda',
      vehicleModel: 'Fit',
      color: 'Gray',
      description: 'Sierra',
      isReady: false,
      checklist: 3}
   ]
 });

export default Vehicle;
