import Component from '@glimmer/component';
import consts from '../../consts';

const VIS_DIR = `${consts.imageBaseUrl}/visitors`;

export default class VisitorComponent extends Component {
  visitor = this.args.visitor;
  imgSrc = `${VIS_DIR}/${this.visitor.i}`;
}
