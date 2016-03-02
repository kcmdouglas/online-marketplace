import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      subCategories: this.store.findAll('subCategory'),
      sales: this.store.findAll('sale'),
      brands: this.store.findAll('brand')
    });
  },

  actions: {
    createProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      var subCategory = params.subCategory;
      var brand = params.brand;
      subCategory.get('products').addObject(newProduct);
      brand.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        subCategory.save();
        brand.save();
      });
    },

    createCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
    },

    createSubCategory(params) {
      var newSubCategory = this.store.createRecord('sub-category', params);
      var category = params.category;
      category.get('subCategories').addObject(newSubCategory);
      newSubCategory.save().then(function() {
        category.save();
      });
    },

    createBrand(params) {
      var newBrand = this.store.createRecord('brand', params);
      newBrand.save();
    },

    createSale(params) {
      var newSale = this.store.createRecord('sale', params);
      var subCategory = params.subCategory;
      subCategory.get('sales').addObject(newSale);
      newSale.save().then(function() {
        subCategory.save();
      });
    }
  }
});
