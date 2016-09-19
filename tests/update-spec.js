QUnit.module('update');

QUnit.test('Should correction update selection', function(assert) {
  const mockAction = Actions.UpdateSelection('test');
  const mockState = Record.create({
    selection : ''
  });
  const stateAndTask = update(mockAction, mockState);
  const actual = stateAndTask[0].data();
  const expected = {
    selection : 'test'
  };
  assert.deepEqual(actual, expected);
});
