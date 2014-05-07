var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['templates', 'viewmaster'], function(templates) {
  var NavView;
  return NavView = (function(_super) {
    __extends(NavView, _super);

    function NavView() {
      NavView.__super__.constructor.apply(this, arguments);
      this.listenTo(this.collection, 'change:selected', this.render);
    }

    NavView.prototype.context = function() {
      return {
        navs: this.collection.toJSON(),
        sel: this.collection.select().id
      };
    };

    NavView.prototype.template = function(context) {
      return templates.nav(context);
    };

    return NavView;

  })(Backbone.ViewMaster);
});
