import Route from '@ember/routing/route';
import images from '../../content/art';

export default class MostArtRoute extends Route {
  model() {
    return images;
  }
}
