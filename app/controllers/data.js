import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import items from '../content/data';

export default class DataController extends Controller {
  @service router;

  topics = items;
  queryParams = ['topic'];
  @tracked topic = null;

  get currentTopic() {
    if (this.topic == null) {
      this.router.transitionTo('data', { queryParams: { topic: 'weapons-supplied'}});
    } else {
      const top = this.topics.filter(top => top.topic == this.topic)
      return top[0]
    }
  }

}
