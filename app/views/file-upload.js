import Ember from 'ember';

var FileUploadView = Ember.TextField.extend({
  tagName: 'input',
  attributeBindings: ['name'],
  type: 'file',
  file: null,
  change: function(e) {
    var reader = new FileReader();
    var self = this;
    reader.onload = function(e) {
      var file = e.target.result;
      Ember.run(function() {
        self.set('file', file);
      });
    };

    return reader.readAsDataURL(e.target.files[0]);
  }
});

export default FileUploadView;
