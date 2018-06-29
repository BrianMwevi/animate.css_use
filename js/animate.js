$(function() {
   $("li").click(function() {
      // remove classes from all
      $("li").removeClass("activee");
      // add class to the one we clicked
      $(this).addClass("activee");
   });
});

unction myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}