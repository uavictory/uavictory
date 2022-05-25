import Component from '@glimmer/component';
import consts from '../../consts';

export default class FeedItemComponent extends Component {

    get imgSrc() {
        const src = `${consts.imageBaseUrl}/visitors/${this.args.item.i}`;
        return src; 
    }
}
