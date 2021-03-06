import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    products: DS.hasMany('product', {async: true}),
    category: DS.belongsTo('category', {async: true}),
    sales: DS.hasMany('sale', {async: true})
});
