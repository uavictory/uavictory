import Component from '@glimmer/component';

export default class YoutubeItemComponent extends Component {
  item = this.args.item;
  vid = this.item.key;
  src = `https://www.youtube.com/embed/${this.vid}`;
  ytWidth = 380;
  ytWidthPx = `${this.ytWidth}px`
  ytHeightPx = `${this.ytWidth*9/16}px`
}
