$(document).ready(function () {
  $('.textarea').on('input', function (event) { 
    let count = 140 - this.textLength;
    
    $('#tweetCounter').text(count);
    if (count < 0) { // make the count go red when less than zero
      $('#tweetCounter').addClass('error');
    } else {
      $('#tweetCounter').removeClass('error');
    }
  });
});


/*

change event - nothing happens
keydown event - if you press down a button and leave it there, it will constantly fire. if you copy and paste text, it registers the whole text as one event.
keyup event - does not register event until after a button is pressed and released. if you copy and paste text, it registers the whole text as one event.
blur event - nothing happens when you press down
keypress event - if you type into the text area, it registers each key except modifier keys (e.g. 'alt').if you copy and paste, it does not register the event.
paste event - if you paste text, it will register it as one event.
input - this event fires synchronously when the value in 'textarea' element is changed

*/
