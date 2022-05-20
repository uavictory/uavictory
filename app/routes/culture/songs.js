import Route from '@ember/routing/route';
import songs from '../../content/songs';

export default class CultureSongsRoute extends Route {
  model() {
    return {
      songs,
    };
  }
}
