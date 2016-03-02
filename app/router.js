import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path: 'category/:category_id'});
  this.route('product', {path: 'product/:product_id'});
  this.route('sub-category', {path: 'sub-category/:sub_category_id'});
  this.route('sale', {path: 'sale/:sale_id'});
  this.route('admin');
  this.route('side-bar');
  this.route('sales');
});

export default Router;
