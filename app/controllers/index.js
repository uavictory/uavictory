import Controller from '@ember/controller';
import { latestNews } from '../content/latest-news';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import why from '../content/why-ukraine-wins';

const hidden = 'hidden';

export default class IndexController extends Controller {
  latest = latestNews;
  whyBlurb = why; 
  @tracked hideBlurbClass = hidden;

  @action
  toggleWhyWin() {
    this.hideBlurbClass = (!this.hideBlurbClass ? hidden : '');
  }
}
