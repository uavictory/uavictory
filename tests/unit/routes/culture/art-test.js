import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | culture/art', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:culture/art');
    assert.ok(route);
  });
});
