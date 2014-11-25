import Ember from 'ember';

var ChecklistItemComponent = Ember.Component.extend({
  tagName: 'a',
  classNames: ['list-group-item'],
  attributeBindings: ['href'],
  href: '#',

  isComplete: function() {
    this.sendAction('action', this.get('item'));
    return this.get('item.complete');
  }.property('item.complete'),

  click: function() {
    this.toggleProperty('item.complete');
    return false;
  }
});

export default ChecklistItemComponent;
