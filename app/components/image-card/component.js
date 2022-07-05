import Component from '@glimmer/component';
import consts from '../../consts';

export default class ImageCardComponent extends Component {
    item = this.args.item;

    get imgSrc() {
        const src = `${consts.imageBaseUrl}/${this.item.key}`;
        return src; 
    }
}
