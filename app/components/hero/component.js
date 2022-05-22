import Component from '@glimmer/component';
import consts from '../../consts';

const imageBaseUrl = `${consts.imageBaseUrl}/people`;

export default class HeroComponent extends Component {
  hero = this.args.hero;
  imageCiv = `${imageBaseUrl}/${this.hero.ic}`;
  imageMil = `${imageBaseUrl}/${this.hero.im}`;
  link = this.hero.link;
  hasLink = !!this.link;
}
