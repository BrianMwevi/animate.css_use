$(function() {
   $("li").click(function() {
      // remove classes from all
      $("li").removeClass("activee");
      // add class to the one we clicked
      $(this).addClass("activee");
   });
});
