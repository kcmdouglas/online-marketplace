import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    discount: DS.attr(),
    subCategory: DS.belongsTo('sub-category', {async: true})
});
