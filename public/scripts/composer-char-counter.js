$(document).ready(function () {
  console.log('it is working');
  $('textarea').on('input', function (event) { 
    let count = 140 - this.textLength;
    $(this).siblings()[1].innerHTML = count;  //  accessing the text length the counter - this allows us to use 'this'
    if (count < 0) { // make the count go red when less than zero
      $(this).next().next().addClass('makeRed');  //  addClass is access CSS to make it red
    } else if (count > 0 && $(this).next().next().hasClass('makeRed')) {  // if count > 0 (true) and 'counter has makeRed class' is false - then this won't fire
      $(this).next().next().removeClass('makeRed'); //  this will try and fire if we didn't have the conditionals - i.e. removing the makeRed class when its not applied.
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
