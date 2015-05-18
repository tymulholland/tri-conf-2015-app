import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectStore = inject('store');

export default Ember.Component.extend({
  classNames: ['calendar-events-component'],
  title: "May 17th",
  start: null, // should be either a date or moment object
  end: null,   // should be either a date or moment object
  store: injectStore('main'),

  events: Ember.computed('start', 'end',  function() {
    var start = this.get('start');
    var end = this.get('end');

    if (start && end) {
      return this.store.find('event', { start: start, end: end });
    } else {
      return [];
    }
  })
});
