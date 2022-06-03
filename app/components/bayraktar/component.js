/* if changes are made here please also reflect them in
the comments in the docs */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

export default class Bayraktar extends Component {
  @tracked bClass = "bayraktar invis";
  @tracked tClass = "tank";
  @tracked lClass = "lith invis"; 
  @tracked tuClass = "turkey invis";
  @tracked msg1Class = "msg1 invis"; 
  @tracked msg2Class = "msg2 invis"; 
  @tracked msg3Class = "msg3 invis"; 
  @tracked misClass = "missile invis"; 
  @tracked expClass = "explosion invis"; 
  @tracked tyLitClass = "thanks invis "; 
  @tracked tyTurkeyClass = "thanks-t invis"; 

  constructor() {
    super(...arguments);
    this.runAnimation();
  }

  async runAnimation() {
    await sleep(100);
    this.tClass = "tank t1"
    await sleep(2000);

    // purchase
    this.lClass = "lith appear1"
    await sleep(800);
    this.msg1Class = "msg1 appear1"
    await sleep(700)
    this.tuClass = "turkey appear1"
    await sleep(800)
    this.msg2Class = "msg2 appear2"
    await sleep(2000)
    this.msg1Class = 'msg1 disappear-500ms';
    this.msg2Class = 'msg2 disappear-500ms';
    await sleep(400)
    this.msg3Class = "msg3 appear2"
    await sleep(1600)
    this.lClass = 'lith disappear1';
    await sleep(400);
    this.tuClass = 'turkey disappear-500ms';
    this.msg3Class = 'msg3 disappear-500ms';

    await sleep(700);
    this.bClass = "bayraktar appear2"
    
    // battle
    await sleep(1000);
    this.tClass = "tank t2"
    await sleep(1000);
    this.bClass = "bayraktar b2"
    await sleep(3200);
    this.misClass = 'missile fire'
    await sleep(375)
    this.expClass = 'explosion e1'
    this.tClass = "tank invis"
    this.misClass = 'missile invis'
    await sleep(500);
    this.expClass = 'explosion e2 disappear1'
    await sleep(600);

    // thanks
    this.tyLitClass = 'thanks appear1'
    await sleep(500)
    this.tyTurkeyClass = 'thanks-t appear1'
    await sleep(2600)
    this.tyLitClass = 'thanks disappear1'
    await sleep(500)
    this.tyTurkeyClass = 'thanks-t disappear1'
    await sleep(300)
    this.bClass = "bayraktar b3"
  }
}

function sleep(ms) {
  return new Promise(resolve => later(resolve, ms));
}