(function ($, window, Drupal) {
  Drupal.behaviors.navigation = {
    attach: function (context, settings) {

      // Navigation
      $( "#burgerMenu", context ).click(function() {
        $('#myDIV').toggleClass("mystyle-active");
      });

      $( "#burgerMenuClose", context ).click(function() {
        $('#myDIV').removeClass("mystyle-active");
      });

      // Copyright
      $("#copyright-year").text((new Date).getFullYear());
      console.log('Copyright');

    }
  }

})(jQuery, window, Drupal);