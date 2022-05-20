import Route from '@ember/routing/route';
import items from '../content/intel';

export default class IntelRoute extends Route {
  model() {
    return items;
  }
}
