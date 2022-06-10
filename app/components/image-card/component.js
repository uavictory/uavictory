import Component from '@glimmer/component';
import consts from '../../consts';

export default class ImageCardComponent extends Component {
    get imgSrc() {
        const src = `${consts.imageBaseUrl}/${this.args.item.key}`;
        return src; 
    }
}
