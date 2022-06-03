import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// import { action } from '@ember/object';
// import { task, timeout } from 'ember-animated/-private/ember-scheduler';
// import move from 'ember-animated/motions/move';
// import { easeOut, easeIn } from 'ember-animated/easings/cosine';

import consts from '../../consts';
import feedItems from '../../content/feed';

const ITEM_LIMIT = 2;
const DELAY = 2800;

export default class FeedTrackComponent extends Component {
  urls = feedItems.map(item=>`${consts.imageBaseUrl}/feed/${item.i}`).sort((a, b) => 0.5 - Math.random());
  @tracked items = [new Item(0, this.feed[0])];
  @tracked nextItem = this.feed[1];
  itemCount = 0;
  // feedItemCount = this.feed.length;
    
    constructor() {
        super(...arguments);
        // this.startChaos();
    }

    // get nextUrl() {
    //     return `${consts.imageBaseUrl }/feed/${this.nextItem.i}`;
    // }

  // *transition({ insertedSprites, keptSprites, removedSprites, beacons }) {
  //   insertedSprites.forEach((sprite) => {
  //     sprite.startAtSprite(beacons.one);
  //     move(sprite, { easing: easeOut });
  //   });

  //   keptSprites.forEach(move);

    // removedSprites.forEach((sprite) => {
    //   // the 0.8 here is purely so I can easily see that the elements
    //   // are being properly removed immediately after they get far
    //   // enough
    //   sprite.endAtSprite(beacons.endAtSprite);
    //   move(sprite, { easing: easeIn });
    // });
  // }

  // @task(function* (running) {
  //   if (!running) {
  //     return;
  //   }

  //   while (true) {
  //     yield timeout(DELAY);
  //     this.addItem();
  //   }
  // }).restartable() 
  // chaos;


  // @action addItem() {
  //   // This deliberately uses stable keys but unstable objects
  //   this.itemCount = this.itemCount + 1 % this.feedItemCount;
  //   let fItem = this.feed[this.itemCount];
  //   if (this.itemCount < this.feedItemCount) {
  //       this.nextItem = this.feed[this.itemCount+1]
  //   }
  //   let item = new Item(this.itemCount, fItem);
  //   if (this.items.length > ITEM_LIMIT) {
  //       this.items = this.items.slice(0, ITEM_LIMIT-1);
  //   }
  //   this.items = this.items.concat(item)
  //     .sortBy('id')
  // }

//   @action removeItem(weich) {
//     this.items = this.items.filter((i) => i !== which);
//   }

//   @action replaceItem(which) {
//     let items = this.items;
//     let index = items.indexOf(which);
//     this.items = items
//       .slice(0, index)
//       .concat([new Item()])
//       .concat(items.slice(index + 1));
//   }

  // @action startChaos() {
  //   // this.addItem();
  //   this.chaos.perform(true);
  // }

  // @action stopChaos() {
  //   this.chaos.perform(false);
  // }
}

class Item {
  @tracked id;
  imgSrc;

  constructor(id, item) {
    this.id = -id;  
    this.item = item;
    this.imgSrc = `${consts.imageBaseUrl }/feed/${this.item.i}`;
    console.log(`imgSrc: ${this.imgSrc}`);
  }
}

// ikUrl(item, folder='') {
//     return `${consts.imageBaseUrl}/`
// }