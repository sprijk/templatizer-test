define(['./Router', './collections/DefaultCollection', './views/BaseView', 'bootstrap'], function(Router, DefaultCollection, BaseView) {
  var baseView, navs, router;
  navs = new DefaultCollection([
    {
      id: 'home',
      url: 'home',
      title: 'Home'
    }, {
      id: 'link-1',
      url: 'link/1',
      title: 'Link 1'
    }, {
      id: 'link-2',
      url: 'link/2',
      title: 'Link 2'
    }
  ]);
  navs.select(navs.at(0));
  baseView = new BaseView({
    navs: navs
  });
  baseView.render();
  router = new Router({
    base: baseView,
    navs: navs
  });
  return {
    initialize: function() {
      return Backbone.history.start();
    }
  };
});
