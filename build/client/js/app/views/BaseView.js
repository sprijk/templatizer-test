var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['./NavView', 'templates', 'viewmaster'], function(NavView, templates) {
  var BaseView;
  return BaseView = (function(_super) {
    __extends(BaseView, _super);

    BaseView.prototype.el = '#app';

    BaseView.prototype.template = function(context) {
      return templates.base(context);
    };

    function BaseView(options) {
      BaseView.__super__.constructor.apply(this, arguments);
      this.setView('#nav', new NavView({
        collection: options.navs
      }));
    }

    return BaseView;

  })(Backbone.ViewMaster);
});
