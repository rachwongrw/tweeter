$(document).ready(function () {
  $('.textarea').on('input', function (event) { 
    let count = 140 - this.textLength;
    
    $('#tweetCounter').text(count);
    if (count < 0) { // make the count go red when less than zero
      $('#tweetCounter').addClass('error');
    } else {
      $('#tweetCounter').removeClass('error'); // remove the red count if it goes back below max characters
    }
  });
});
