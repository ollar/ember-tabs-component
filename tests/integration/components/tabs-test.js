import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, waitUntil, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tabs', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('title1', 'title1');
    this.set('title2', 'title2');
    this.set('content1', 'content1');
    this.set('content2', 'content2');
  });

  test('it renders', async function(assert) {
    await render(hbs`<Tabs />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Tabs>
        template block text
      </Tabs>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders correct tabs on init', async function(assert) {
    await render(hbs`
      <Tabs as |tabs|>
        <tabs.Title>
          {{this.title1}}
        </tabs.Title>
        <tabs.Title>
          {{this.title2}}
        </tabs.Title>

        <tabs.Content>
          {{this.content1}}
        </tabs.Content>
        <tabs.Content>
          {{this.content2}}
        </tabs.Content>
      </Tabs>
    `);

    assert.equal(this.element.querySelector('.content').textContent.trim(), this.content1);
  });

  test('it shows correct content on tab click', async function(assert) {
    await render(hbs`
      <Tabs as |tabs|>
        <tabs.Title>
          {{this.title1}}
        </tabs.Title>
        <tabs.Title>
          {{this.title2}}
        </tabs.Title>

        <tabs.Content>
          {{this.content1}}
        </tabs.Content>
        <tabs.Content>
          {{this.content2}}
        </tabs.Content>
      </Tabs>
    `);

    await click('.title:nth-child(2)');

    assert.equal(this.element.querySelector('.content:not(.hidden)').textContent.trim(), this.content2);

    await render(hbs`
      <Tabs as |tabs|>
        <tabs.Title>
          {{this.title1}}
        </tabs.Title>
        <tabs.Title>
          {{this.title2}}
        </tabs.Title>
        <tabs.Title>
          title 3
        </tabs.Title>

        <tabs.Content>
          {{this.content1}}
        </tabs.Content>
        <tabs.Content>
          {{this.content2}}
        </tabs.Content>
        <tabs.Content>
          content 3
        </tabs.Content>
      </Tabs>
    `);

    await click('.title:nth-child(2)');

    assert.equal(this.element.querySelector('.content:not(.hidden)').textContent.trim(), this.content2);
  });

  test('it works when tabs and content number do not match', async function(assert) {
    // 3 titles, 2 content
    await render(hbs`
      <Tabs as |tabs|>
        <div>test text</div>

        <tabs.Title>
          {{this.title1}}
        </tabs.Title>
        <tabs.Title>
          {{this.title2}}
        </tabs.Title>
        <tabs.Title>
          title 3
        </tabs.Title>

        <p>lorem test</p>

        <tabs.Content>
          {{this.content1}}
        </tabs.Content>
        <tabs.Content>
          {{this.content2}}
        </tabs.Content>

        <img src="http://lorempixel.com/400/200" />
      </Tabs>
    `);

    await click('.title:nth-of-type(2)');

    assert.equal(this.element.querySelector('.content:not(.hidden)').textContent.trim(), this.content2);

    // 2 titles, 3 content
    await render(hbs`
      <Tabs as |tabs|>
        <div>test text</div>

        <tabs.Title>
          {{this.title1}}
        </tabs.Title>
        <tabs.Title>
          {{this.title2}}
        </tabs.Title>

        <p>lorem test</p>

        <tabs.Content>
          {{this.content1}}
        </tabs.Content>
        <tabs.Content>
          {{this.content2}}
        </tabs.Content>
        <tabs.Content>
          constent 3
        </tabs.Content>

        <img src="http://lorempixel.com/400/200" />
      </Tabs>
    `);

    await click('.title:nth-of-type(2)');

    assert.equal(this.element.querySelector('.content:not(.hidden)').textContent.trim(), this.content2);
  });
});
