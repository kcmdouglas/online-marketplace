import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  subCategories: DS.hasMany('subCategory', {async: true})
});
