import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    discount: DS.attr(),
    products: DS.hasMany('product', {async: true})
});
