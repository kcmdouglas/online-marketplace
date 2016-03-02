import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    brand: DS.belongsTo('brand', {async: true}),
    price: DS.attr(),
    image: DS.attr(),
    subCategory: DS.belongsTo('sub-category', {async: true})
});
