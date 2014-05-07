require.config({
  paths: {
    jquery: '/js/third-party/jquery/jquery-2.0.3.min',
    underscore: '/js/third-party/underscore/underscore.min',
    backbone: '/js/third-party/backbone/backbone.min',
    viewmaster: '/js/third-party/backbone.viewmaster/backbone.viewmaster',
    bootstrap: '/js/third-party/bootstrap/bootstrap.min'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    viewmaster: {
      deps: ['jquery', 'underscore', 'backbone']
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require(['app'], function(App) {
  return App.initialize();
});
