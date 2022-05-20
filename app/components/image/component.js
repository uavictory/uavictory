import Component from '@glimmer/component';

const BASE_URL = 'https://ik.imagekit.io/ubx4wnixel/uavictory';

export default class ImageComponent extends Component {
  imgSrc = this.args.src;
  src = `${BASE_URL}/${this.imgSrc}`;
}
