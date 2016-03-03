import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (session.isAuthenticated) {
      this.transitionTo('index');
    }
  }
});
