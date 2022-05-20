import Route from '@ember/routing/route';
import battlefields from '../content/battlefields';

export default class BattlefieldsRoute extends Route {
  model() {
    return battlefields;
  }
}
