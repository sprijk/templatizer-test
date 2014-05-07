var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['templates', 'viewmaster'], function(templates) {
  var LinkView;
  return LinkView = (function(_super) {
    __extends(LinkView, _super);

    function LinkView() {
      return LinkView.__super__.constructor.apply(this, arguments);
    }

    LinkView.prototype.initialize = function(options) {
      return this.linkId = options.linkId;
    };

    LinkView.prototype.context = function() {
      return {
        linkId: this.linkId
      };
    };

    LinkView.prototype.template = function(context) {
      return templates.link(context);
    };

    return LinkView;

  })(Backbone.ViewMaster);
});
