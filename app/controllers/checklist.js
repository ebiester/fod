import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['session'],
  currentUser: Ember.computed.alias('controllers.session.currentUser'),

  updateDamage: function() {
    if (this.get('checklist.damage_checked')) {
      this.set('checklist.damage_checked_by',
        this.get('currentUser.name'));
    }
  }.observes('checklist.damage_checked'),

  updateCleaned: function() {
    if (this.get('checklist.cleaned')) {
      this.set('checklist.cleaned_by',
        this.get('currentUser.name'));
    }
  }.observes('checklist.cleaned'),

  updateGasChecked: function() {
    if (this.get('checklist.gas_checked')) {
      this.set('checklist.gas_checked_by',
        this.get('currentUser.name'));
    }
  }.observes('checklist.gas_checked'),

  updateUpkitted: function() {
    if (this.get('checklist.upkitted')) {
      this.set('checklist.upkitted_by',
        this.get('currentUser.name'));
    }
  }.observes('checklist.upkitted'),

  updateParked: function() {
    if (this.get('checklist.parked_on_the_line')) {
      this.set('checklist.parked_on_the_line_by',
        this.get('currentUser.name'));
    }
  }.observes('checklist.parked_on_the_line'),


  actions: {
    sendToZipcar: function() {
      this.set('isReady', true);
      this.transitionToRoute('vehicle',
          this.model);
    }
  }
});
