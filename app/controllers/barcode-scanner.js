import Ember from 'ember';
import DecoderWorkerWrapper from 'fod/lib/decoder-worker';

var BarcodeScanner = Ember.Controller.extend({
  processImage: function(file) {
    var worker = new DecoderWorkerWrapper();
    return worker.processImage(file);
  }
});

export default BarcodeScanner;
