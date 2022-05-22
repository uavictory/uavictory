import Component from '@glimmer/component';
import consts from '../../consts';

export default class ImageComponent extends Component {
  imgSrc = this.args.src;
  src = `${consts.imageBaseUrl}/${this.imgSrc}`;
}
