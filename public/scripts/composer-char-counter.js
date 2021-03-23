// Implementing event handler to track characters typed into
// new tweets form. Will then adjust the num of characters remaining.
$(document).ready(function() {
  console.log( "ready!" );
  let counter = 0;
  $("#tweet-text").on('keypress', function() {
    console.log(this); //The this keyword is a reference to the button
    counter++

    $("#tweet-text").on('keyup', function() {
      // Count number of characters in input field
      let currentCount = $("#tweet-text").val().length;
      console.log("CurrentCount:", currentCount);
      let newCharCountVal = 140 - currentCount;
      $(".counter").text(newCharCountVal);
      if (newCharCountVal <= 0) {
        $(".counter").css("color", "red");
      } else {
        $(".counter").css("color", "black");
      }
    })

    //let maxChars = 140 - currentCount;

    // Characters left
    //let newCharCountVal = 140 - counter;

    // Adjust character counter based on counter var

  });
});
