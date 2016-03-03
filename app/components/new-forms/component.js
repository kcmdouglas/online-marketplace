import Ember from 'ember';

export default Ember.Component.extend({
  showProductForm: false,
  showCategoryForm: false,
  showSubCategoryForm: false,
  showSaleForm: false,
  showBrandForm: false,
  currentCategory: null,
  currentSubCategory: null,
  currentBrand: null,

  actions: {
    showProductForm() {
      this.set('showProductForm', true);
    },

    hideProductForm() {
      this.set('showProductForm', false);
    },

    showCategoryForm() {
      this.set('showCategoryForm', true);
    },

    hideCategoryForm() {
      this.set('showCategoryForm', false);
    },

    showSubCategoryForm() {
      this.set('showSubCategoryForm', true);
    },

    hideSubCategoryForm() {
      this.set('showSubCategoryForm', false);
    },

    showSaleForm() {
      this.set('showSaleForm', true);
    },

    hideSaleForm() {
      this.set('showSaleForm', false);
    },

    showBrandForm() {
      this.set('showBrandForm', true);
    },

    hideBrandForm() {
      this.set('showBrandForm', false);
    },

    setCurrentBrand(brand) {
      this.set('currentBrand', brand);
    },

    setCurrentCategory(category) {
      this.set('currentCategory', category);
    },

    setCurrentSubCategory(subCategory) {
      this.set('currentSubCategory', subCategory);
    },

    createProduct() {
      var params = {
        name: this.get('productName'),
        brand: this.get('currentBrand'),
        category: this.get('currentCategory'),
        subCategory: this.get('currentSubCategory'),
        price: this.get('productPrice'),
        image: this.get('productImage')
      };
      this.sendAction("createProduct", params);
    },

    createCategory() {
      var params = {
        name: this.get('categoryName'),
      };
      this.sendAction("createCategory", params);
    },

    createSubCategory() {
      var params = {
        name: this.get('subCategoryName'),
        category: this.get('currentCategory'),
      };
      this.sendAction("createSubCategory", params);
    },

    createSale() {
      var params = {
        name: this.get('saleName'),
        description: this.get('saleDescription'),
        image: this.get('saleImage'),
        discount: this.get('saleDiscount'),
        subCategory: this.get('currentSubCategory')
      };
      this.sendAction("createSale", params);
    },

    createBrand() {
      var params = {
        name: this.get('brandName'),
      };
      this.sendAction("createBrand", params);
    }

  }
});
