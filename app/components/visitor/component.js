import Component from '@glimmer/component';

const imageBaseUrl = 'https://ik.imagekit.io/ubx4wnixel/uavictory';
const VIS_DIR = 'visitors';
export default class VisitorComponent extends Component {
  visitor = this.args.visitor;
  imgSrc = `${imageBaseUrl}/${VIS_DIR}/${this.visitor.i}`;
}
