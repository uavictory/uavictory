import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import items from '../../content/data';
import consts from '../../consts';

export default class DataArrayComponent extends Component {
  topics = items;
  iconPath = consts.imageBaseUrl; 
  @tracked currentTopic = this.topics[0];

  @action
  setCurrentTopic(topic) {
    this.currentTopic = topic;
  }

  get component() {
    return this.currentTopic.component;
  }
}
