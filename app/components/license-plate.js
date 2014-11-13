import Ember from "ember";

export default Ember.Component.extend({
  submit: function () {
    this.sendAction('submit');
  }
});
