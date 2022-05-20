import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | culture/songs', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:culture/songs');
    assert.ok(route);
  });
});
