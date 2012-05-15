(function ($, Drupal, window, document, undefined) {
  //Store our function as a property of Drupal.behaviors.
  Drupal.behaviors.email_reminder = function (context) {
    $('body', context).ready(function() {
      if (typeof $.cookie != 'undefined') {
        // only fire if cookie doesn't exist
        if (!$.cookie('email_reminder')) {
          $.cookie('email_reminder', 'hide', { expires: 30, path: '/'});
          triggerEvent(context);
        }
      }
    });
  };
  function triggerEvent(context) {
    // set the ready handler only for the parent frame
    if (window.location == window.parent.location) {
      // The URL of the same link will be opened within a modal frame.
      Drupal.modalFrame.open({
        url : Drupal.settings.basePath + 'add-email',
        width : 475,
        height : 300,
      });
    }
  };
}(jQuery, Drupal, this, this.document));

