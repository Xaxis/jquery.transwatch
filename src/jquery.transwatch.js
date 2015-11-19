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
      // Do stuff here ...
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
