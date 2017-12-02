import getTime from './helper';

const { module, test } = QUnit;

module('Helper: getTime', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(getTime([]), undefined);
  });
});
