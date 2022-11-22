(function ($, window, Drupal) {
  Drupal.behaviors.copyright = {
    attach: function (context, settings) {

      $("#myLoader").addClass("loading-active").delay(2500).queue(function(next){
        $(this).removeClass("loading-active");
        next();
      });

    }
  }

})(jQuery, window, Drupal);