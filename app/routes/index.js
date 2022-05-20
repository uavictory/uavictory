import Route from '@ember/routing/route';
import events from '../content/main-timeline';

export default class IndexRoute extends Route {
  model() {
    return events;
  }
}
