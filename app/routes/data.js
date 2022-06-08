import Route from '@ember/routing/route';
import { service } from '@ember/service';
import items from '../content/data';

export default class DataRoute extends Route {
  @service router;


  //this should work but it doesn't
  beforeModel(params) {
    if (params.intent.url == '/data') {
      this.router.transitionTo('data', 
        { 
          queryParams: { topic: items[0].topic}
        }
      );
    }
  }
}
