import Component from '@glimmer/component';

export default class YoutubeItemComponent extends Component {
  item = this.args.item;
  vid = this.item.key;
  src = `https://www.youtube.com/embed/${this.vid}`;
}
