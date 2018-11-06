$(document).ready(function () {
  console.log('it is working'); 
  $('.new-tweet').on('change keydown', (event) => {
    console.log(event.target.textLength);
  });
});


/*

change event - nothing happens
keydown event - if you press down a button and leave it there, it will constantly fire. if you copy and paste text, it registers the whole text as one event.
keyup event - does not register event until after a button is pressed and released. if you copy and paste text, it registers the whole text as one event.
blur event - nothing happens when you press down
keypress event - if you type into the text area, it registers each key except modifier keys (e.g. 'alt').if you copy and paste, it does not register the event.
paste event - if you paste text, it will register it as one event.

*/
