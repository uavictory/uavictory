import Route from '@ember/routing/route';
import items from '../content/help';

export default class HelpRoute extends Route {
  model() {
    return items;
  }
}
