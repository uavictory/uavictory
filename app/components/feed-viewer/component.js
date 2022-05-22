import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import visitors from '../../content/visitors';
import { action } from '@ember/object';

export default class FeedViewerComponent extends Component {
    @tracked v0Item = visitors[0];
    @tracked v1Item = visitors[1];
    @tracked v2Item = visitors[2];
    @tracked v3Item = visitors[3];
    counter = 3;

    viewerCount = 4;
    items = visitors;
    itemCount = this.items.length;

    // get view0Item() {
    //     return this.v0Item;
    // }

    @action
    nextItem() {
        this.counter += 1;
        const viewerNum = this.counter % this.viewerCount;
        const itemNum = this.counter % this.itemCount;
        const viewer = `v${viewerNum}Item`;
        this[viewer] = this.items[itemNum];
        console.log(`Vr ${viewer} has item with key ${this[viewer].i}`);
    }

}
