import Route from '@ember/routing/route';
import songs from '../../content/songs';

export default class MostSongsRoute extends Route {
  model() {
    return {
      songs,
    };
  }
}
