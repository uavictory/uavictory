import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import items from '../../content/data';
import consts from '../../consts';
import { service } from '@ember/service';


export default class DataArrayComponent extends Component {
  @service router;

  topics = items;
  iconPath = consts.imageBaseUrl; 
  top = this.args.topic;
  @tracked currentTopic = this.args.topic;
 
  // get
  @action
  transitionTopic(topicItem) {
    const topic = topicItem.topic;
    this.router.transitionTo('data', { queryParams: { topic}});
  }

  get component() {
    const topic = this.args.topic;
    if (topic &&topic.topic) {
      return `data/${topic.topic}`;
    }
    return null;
  }
}
