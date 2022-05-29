import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import items from '../../content/data';

export default class DataArrayComponent extends Component {
  topics = items;
  @tracked currentTopic = this.topics[0];

  @action
  setCurrentTopic(topic) {
    this.currentTopic = topic;
  }
}
