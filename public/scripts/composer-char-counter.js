// Track num of characters remaining for new tweet
$(document).ready(function() {
  console.log( "ready!" );
  let counter = 0;
  $("#tweet-text").on('keypress', function() {
    console.log(this);
    counter++
    $("#tweet-text").on('keyup', function() {
      // Count number of characters in input field
      let currentCount = $("#tweet-text").val().length;
      let charsRemaining = 140 - currentCount;
      $(".counter").text(charsRemaining);
      if (charsRemaining <= 0) {
        $(".counter").css("color", "red");
      } else {
        $(".counter").css("color", "black");
      }
    })
  });
});
