import Component from '@glimmer/component';

const imageBaseUrl = 'https://ik.imagekit.io/ubx4wnixel/uavictory/people';

export default class HeroComponent extends Component {
  hero = this.args.hero;
  imageCiv = `${imageBaseUrl}/${this.hero.ic}`;
  imageMil = `${imageBaseUrl}/${this.hero.im}`;
  link = this.hero.link;
  hasLink = !!this.link;
}
