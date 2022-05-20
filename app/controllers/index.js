import Controller from '@ember/controller';
import newsItems from '../content/latest-news';

export default class IndexController extends Controller {
  latestNews = newsItems;
}
