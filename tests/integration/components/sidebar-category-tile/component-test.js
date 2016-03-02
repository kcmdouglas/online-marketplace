import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar-category-tile', 'Integration | Component | sidebar category tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{sidebar-category-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#sidebar-category-tile}}
      template block text
    {{/sidebar-category-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
