import DS from 'ember-data';

var Vehicle = DS.Model.extend({
  vin: DS.attr(),
  license: DS.attr(),
  mvaId: DS.attr(),
  make: DS.attr(),
  model: DS.attr(),
  color: DS.attr(),
  isReady: DS.attr('boolean')
});

Vehicle.reopenClass({
   FIXTURES: [
     {id: 1,
      vin: '5NPDH4AE7EH522856',
      license: '117GXT',
      mvaId: '66889093',
      make: 'Hyundai',
      model: 'Elantra',
      color: 'Yellow',
      isReady: true},
     {id: 2,
      vin: '5NPDH4AE7EH522857',
      license: '117GXH',
      mvaId: '66889094',
      make: 'Toyota',
      model: 'Carolla',
      color: 'Silver',
      isReady: false},
   ]
 });

export default Vehicle;
