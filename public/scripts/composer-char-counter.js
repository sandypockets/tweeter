// Implementing event handler to track characters typed into
// new tweets form. Will then adjust the num of characters remaining.
$(document).ready(function() {
  console.log( "ready!" );
  let counter = 0;
  $("#tweet-text").on('keypress', function() {
    console.log(this); //The this keyword is a reference to the button
    counter++
    let currentCount = $("#tweet-text").val().length;
    
    //let maxChars = 140 - currentCount;
    console.log("CurrentCount:", currentCount);
    let newCharCountVal = 140 - counter;

    // Adjust character counter based on counter var
    $(".counter").text(newCharCountVal);
    if (newCharCountVal <= 0) {
      $(".counter").css("color", "red");
    }
  });
});
