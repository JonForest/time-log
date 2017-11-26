import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';
declare const QUnit: any;

const { module, test } = QUnit;

module('Component: TimeLogRecordComponent', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<TimeLogRecordComponent />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});
