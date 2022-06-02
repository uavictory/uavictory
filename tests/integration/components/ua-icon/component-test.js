import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ua-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UaIcon />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <UaIcon>
        template block text
      </UaIcon>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
