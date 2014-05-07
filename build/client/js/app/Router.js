var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['./views/HomeView', './views/LinkView'], function(HomeView, LinkView) {
  var Router;
  return Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'home',
      'home': 'home',
      'link/:id': 'link'
    };

    Router.prototype.initialize = function(options) {
      this.base = options.base;
      return this.navs = options.navs;
    };

    Router.prototype.home = function() {
      this.navs.select(this.navs.get('home'));
      this.base.setView('#content', new HomeView);
      return this.base.refreshViews();
    };

    Router.prototype.link = function(linkId) {
      this.navs.select(this.navs.get("link-" + linkId));
      this.base.setView('#content', new LinkView({
        linkId: linkId
      }));
      return this.base.refreshViews();
    };

    return Router;

  })(Backbone.Router);
});
