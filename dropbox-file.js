// Generated by CoffeeScript 1.10.0
(function() {
  Polymer({
    is: "dropbox-file",
    behaviors: [window.DropboxItemBehavior],
    hostAttributes: {
      contenteditable: true
    },
    properties: {
      _data: {
        notify: true,
        type: String
      },

      /* If true, automatically performs fetch of your element */
      auto: {
        observer: "_observeAuto",
        type: Boolean
      },
      arrayBuffer: {
        reflectToAttribute: true,
        type: Boolean
      },
      blob: {
        reflectToAttribute: true,
        type: Boolean
      }
    },
    _observeAuto: function(auto) {
      if (auto) {
        return this.$.content.addEventListener("input", this.save);
      } else {
        return this.$.content.removeEventListener("input", this.save);
      }
    },

    /* Read data from Dropbox File */
    fetch: function() {
      return this.execute(function() {
        return this.instance.readFile(this.path, (function(_this) {
          return function(error, _data) {
            _this._data = _data;
            if (error != null) {
              return _this.fire("error", error);
            }
          };
        })(this));
      });
    },
    ready: function() {
      if (this.auto) {
        return this.fetch();
      }
    },

    /* Synchronize Dropbox File */
    save: function() {
      return this.execute(function() {
        return this.instance.writeFile(this.path, this.$.content.textContent, (function(_this) {
          return function(error) {
            if (error != null) {
              return _this.fire("error", error);
            }
          };
        })(this));
      });
    }
  });

}).call(this);

//# sourceMappingURL=dropbox-file.js.map