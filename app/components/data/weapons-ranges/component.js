import Component from '@glimmer/component';

import items from '../../../content/data/weapons-ranges';
export default class WeaponsRangesComponent extends Component {
  weapons = items;

  get yang() {
    debugger
    return 'yuan'
  }
}
