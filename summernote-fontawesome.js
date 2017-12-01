(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}(function ($) {

  $.extend($.summernote.plugins, {
    'summernote-fontawesome': function (context) {
      var self = this;
      self.$toolbar = context.layoutInfo.toolbar;

      var icons = {
        'note-icon-align': 'fa-align',
        'note-icon-align-center': 'fa-align-center',
        'note-icon-align-justify': 'fa-align-justify',
        'note-icon-align-left': 'fa-align-left',
        'note-icon-align-right': 'fa-align-right',
        'note-icon-align-indent': 'fa-indent',
        'note-icon-align-outdent': 'fa-outdent',
        'note-icon-arrows-alt': 'fa-arrows-alt',
        'note-icon-bold': 'fa-bold',
        'note-icon-caret': 'fa-caret-down',
        'note-icon-circle': 'fa-circle',
        'note-icon-close': 'fa-close',
        'note-icon-code': 'fa-code',
        'note-icon-eraser': 'fa-eraser',
        'note-icon-font': 'fa-font',
        'note-icon-italic': 'fa-italic',
        'note-icon-link': 'fa-link',
        'note-icon-magic': 'fa-magic',
        'note-icon-menu-check': 'fa-check',
        'note-icon-minus': 'fa-minus',
        'note-icon-orderedlist': 'fa-list-ol',
        'note-icon-pencil': 'fa-pencil',
        'note-icon-picture': 'fa-picture-o',
        'note-icon-question': 'fa-question',
        'note-icon-redo': 'fa-redo',
        'note-icon-square': 'fa-square',
        'note-icon-strikethrough': 'fa-strikethrough',
        'note-icon-subscript': 'fa-subscript',
        'note-icon-superscript': 'fa-superscript',
        'note-icon-table': 'fa-table',
        'note-icon-text-height': 'fa-text-height',
        'note-icon-trash': 'fa-trash',
        'note-icon-underline': 'fa-underline',
        'note-icon-undo': 'fa-undo',
        'note-icon-unorderedlist': 'fa-list-ul',
        'note-icon-video': 'fa-video-camera'
      }

      this.initialize = function() {
        $.each(icons, function(key, value) {
          self.$toolbar.find('i.' + key).removeClass(key).addClass('fa ' + value);
        });
      };
    }
  });
}));
