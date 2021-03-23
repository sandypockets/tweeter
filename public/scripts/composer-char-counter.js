const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


// Implementing event handler to track characters typed into
// new tweets form. Will then adjust the num of characters remaining.
/* $(document).ready(function() {
  // --- our code goes here ---
  console.log("Test that it's working!");
}); */


// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
});

