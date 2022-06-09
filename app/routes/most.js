import Route from '@ember/routing/route';
import items from '../content/most';

export default class MostRoute extends Route {
  model() {
    return {
      items,
    };
  }
}
