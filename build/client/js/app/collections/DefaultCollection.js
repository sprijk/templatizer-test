var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['backbone'], function(Backbone) {
  var DefaultCollection;
  return DefaultCollection = (function(_super) {
    __extends(DefaultCollection, _super);

    function DefaultCollection() {
      DefaultCollection.__super__.constructor.apply(this, arguments);
      this.attr = {};
      this.selected = null;
    }

    DefaultCollection.prototype.attr = function(prop, value, noTrigger) {
      if (noTrigger == null) {
        noTrigger = false;
      }
      if (value) {
        this.attr[prop] = value;
        if (!noTrigger) {
          return this.trigger("change:" + prop, value);
        }
      } else {
        return this.attr[prop];
      }
    };

    DefaultCollection.prototype.select = function(model, noTrigger) {
      if (noTrigger == null) {
        noTrigger = false;
      }
      if (model) {
        if (!this.selected || this.selected.id !== model.id) {
          this.selected = model;
          if (!noTrigger) {
            return this.trigger('change:selected', model);
          }
        }
      } else {
        return this.selected;
      }
    };

    return DefaultCollection;

  })(Backbone.Collection);
});
