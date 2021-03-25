// Track num of characters remaining for new tweet
$(document).ready(function() {
  console.log("ready!");
  $("#tweet-text").on('keyup', function() {
    // Count number of characters in input field
    const currentCount = $("#tweet-text").val().length;
    const charsRemaining = 140 - currentCount;
    $(".counter").text(charsRemaining);
    if (charsRemaining < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});