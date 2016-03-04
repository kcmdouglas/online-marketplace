import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service(),
  cartLength: Ember.inject.service(),
  actions: {
    signOut() {
      this.get('session').close();
      this.transitionToRoute('index');
    }
  }
});
