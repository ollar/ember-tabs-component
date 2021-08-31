import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tabs/content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('tabsContent', 'test content');

    // Template block usage:
    await render(hbs`
      <Tabs as |tabs|>
        <tabs.Content>
        {{this.tabsContent}}
        </tabs.Content>
      </Tabs>
    `);

    assert.equal(this.element.textContent.trim(), this.tabsContent);
  });
});
