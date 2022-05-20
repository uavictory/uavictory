import Route from '@ember/routing/route';
import visitors from '../content/visitors';

export default class VisitorsRoute extends Route {
  model() {
    return {
      visitors: visitors.sortBy('d').reverse(),
    };
  }
}
