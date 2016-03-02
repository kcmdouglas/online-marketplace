import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    categories: this.findAll('category'),
    subCategories: this.findAll('sub-category'),
    sales: this.findAll('sales'),
    brands: this.findAll('brand')
  }
});
