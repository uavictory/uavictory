import Route from '@ember/routing/route';
import people from '../content/people';

export default class HeroesRoute extends Route {
  model() {
    return people;
  }
}
