import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CultureIndexRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('culture.songs');
  }
}
