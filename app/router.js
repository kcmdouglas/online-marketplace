import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category');
  this.route('product');
  this.route('sub-category');
  this.route('sale');
  this.route('admin');
});

export default Router;
