import Component from '@glimmer/component';

const ART_DIR = 'art';

export default class ArtImageComponent extends Component {
  image = this.args.image;
  imageUrl = `${ART_DIR}/${this.image.url}`;
}
