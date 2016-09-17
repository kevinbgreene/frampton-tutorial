QUnit.module('Something');

QUnit.test('Should something', function(assert) {
  const actual = test(3);
  const expected = 5;
  assert.equal(actual, expected);
});

QUnit.test('Should something again', function(assert) {
  const actual = test(6);
  const expected = 8;
  assert.equal(actual, expected);
});
