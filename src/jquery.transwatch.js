/**
 * jQuery.transwatch
 *
 * (a) Wil Neeley
 * (c) Code may be freely distributed under the MIT license.
 */
;(function ( $, window, document, undefined ) {

  "use strict";

  var
    plugin_name   = 'transwatch',
    defaults      = {
      transitions: {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      },
      transition: '',
      onEnd: null
    };

  // Plugin constructor
  function Plugin( element, options ) {
    this._name = plugin_name;
    this._defaults = defaults;
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this.init();
  }

  // Extend plugin prototype
  $.extend(Plugin.prototype, {

    /**
     * Initialize plugin.
     */
    init: function() {
      this.watchTransitionElement();
    },

    /**
     * Manages TransitionEvent interface.
     */
    watchTransitionElement: function() {
      var
        plugin        = this;
      if (this.options.onEnd) {
        for (var t in this.options.transitions) {
          if (this.element.style[t] !== undefined) {
            this.element.addEventListener(this.options.transitions[t], function(e) {
              if (plugin.options.transition) {
                if (e.propertyName == plugin.options.transition) {
                  plugin.options.onEnd.apply($(plugin.element), [e, plugin.options.transitions[t]]);
                }
              } else {
                plugin.options.onEnd.apply($(plugin.element), [e, plugin.options.transitions[t]]);
              }
            });
            return;
          }
        }
      }
    }
  });

  // Plugin wrapper
  $.fn[plugin_name] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + plugin_name)) {
        $.data(this, 'plugin_' + plugin_name, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );
