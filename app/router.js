import EmberRouter from '@ember/routing/router';
import config from 'ukraine/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('feed', {path: 'spirit'} );
  this.route('heroes');
  this.route('armaments');
  this.route('battlefields');
  this.route('help');
  this.route('russia-resources');

  this.route('most', function () {
    this.route('index', { path: '/' });
    this.route('songs');
    this.route('art');
  });
  this.route('culture', function () {
    this.route('songs');
    this.route('art');
  });
  this.route('visitors');
  this.route('intel');
  this.route('feed');
  this.route('data');
});
