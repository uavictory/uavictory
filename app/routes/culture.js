import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CultureRoute extends Route {

  @service router;
  // some routes under culture were most to most
  // this redirects in case of stale links
  beforeModel(transition) {
    const newRoute = transition.targetName.replace('culture', 'most')
    this.router.transitionTo(newRoute);
  }
}
