import Component from '@glimmer/component';

export default class VariableItemComponent extends Component {
  item = this.args.item;

  get componentName() {
    //but comp types in content/most.js
    const type = this.item.type;
    if (type == 'yt' ) {
      return 'yt-card';
    } else if (type == 'img') {
      return 'image-card';
    }
  } 
}
