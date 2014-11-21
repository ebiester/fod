import Ember from 'ember';

var ScanImageComponent = Ember.Component.extend({
  scannedFile: null,
  type: null,

  fileScanned: function() {
    this.sendAction('action', this.get('scannedFile'), this.get('type'));
  }.observes('scannedFile'),

  actions: {
    scanImage: function() {
      this.$('input[type=file]').click();
    }
  }
});

export default ScanImageComponent;
