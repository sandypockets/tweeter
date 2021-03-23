// Hides .username CSS class from the page, then displays it when user
// hovers over #tweets-container CSS ID
// Disppears again when user moves mouse away from #tweets-container
$(document).ready(function() {
  $(".username").css("display", "none");

    $("#tweets-container").hover(function() {
      $(".username").css("display", "flex");
    }, function() {
      $(".username").css("display", "none")});
});