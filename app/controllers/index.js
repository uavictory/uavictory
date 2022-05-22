import Controller from '@ember/controller';
import { latestNews } from '../content/latest-news';

export default class IndexController extends Controller {
  latest = latestNews;
}
