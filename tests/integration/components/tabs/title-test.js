import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tabs/title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');

    this.set('tabsTitleText', 'test title');

    await render(hbs`
      <Tabs as |tabs|>
      <tabs.Title>{{this.tabsTitleText}}</tabs.Title>
      </Tabs>
    `);

    assert.equal(this.element.textContent.trim(), this.tabsTitleText);
  });
});
