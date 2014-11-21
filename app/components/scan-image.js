import Ember from 'ember';

var ScanImageComponent = Ember.Component.extend({
  scannedFile: null,

  test: function() {
    this.sendAction('action', this.get('scannedFile'));
  }.observes('scannedFile'),

  actions: {
    scanImage: function() {
      this.$('input[type=file]').click();
    }
  }
});

export default ScanImageComponent;
