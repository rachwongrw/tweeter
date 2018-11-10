$(() => { //  IIFE to load HTML before the JS 
  loadTweets(); 

  function renderTweets(data) {
    data.forEach(function (i) {
      const $eachTweet = createTweetElement(i);
      $('#tweets-container').prepend($eachTweet); //prepend to have the latest tweet to add to the the top
    })
  }

  // Add date -days ago
  // function date(givenDate) {
  //   var myObj = $.parseJSON(givenDate.created_at)
  //       myDate = new Date(1000*myObj.created_at);
    
  //   console.log(myDate.toString());
  //   console.log(myDate.toLocaleString());
  //   console.log(myDate.toUTCString());
  // }

  // function getDate(data) {
  //   // var data = {"date_created":"1273185387"};
  //   var date = new Date(parseInt(data.created_at, 10) * 1000);
  //   console.log(date);
  //   console.log(date.toLocaleString());
  // }
    
  
  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  // var aDay = 24*60*60*1000
  // console.log(timeSince(new Date(Date.now()-aDay)));
  // console.log(timeSince(new Date(Date.now()-aDay*2)));

  function createTweetElement(data) {
    const $makeArticle = $(`<article>`).addClass('tweet'); // make empty article
    const $makeHeader = $(`<header>`).addClass('tweet-header').appendTo($makeArticle); // make header
    const $addDP = $(`<img>`).prop(`src`, data.user.avatars.small).appendTo($makeHeader); //  add icon to header
    const $addName = $(`<h2>`).text(data.user.name).appendTo($makeHeader); // add name to header
    const $addHandle = $(`<span>`).text(data.user.handle).appendTo($makeHeader); // add handle to header
    // add tweet content
    const $tweetContent = $(`<p>`).text(data.content.text).addClass('tweet-content').appendTo($makeArticle);
    // add footer
    const $makeFooter = $(`<footer>`).text(timeSince(data.created_at)).addClass('tweet-footer').appendTo($makeArticle);
    const $addIcons = $(`<div>`).addClass('icons').appendTo($makeFooter); // add div for icons
    const $addFlagIcon = $(`<i class="fas fa-flag"></i>`).appendTo($addIcons); // add each icon
    const $addRetweetIcon = $(`<i class="fas fa-retweet"></i>`).appendTo($addIcons);
    const $addHeartIcon = $(`<i class="fas fa-heart"></i>`).appendTo($addIcons);

    return $makeArticle;
  }
  
  //  Form Validation
  $('form').submit(function (event) {
    event.preventDefault(); //  prevent the button from firing
    const formContent = $(this).serialize(); // create text string from the content of the form
    const textLength = $('textarea').val().length;  // this will find the actual length
    
    function validateForm() {    
      if (textLength > 140) {    // if text length is > 140 then prompt user and stop from submitting twee
        $('.errMessage').text("Dayum, you got a lot to say...Tweet is too long!");
        return false;
      } else if (textLength === 0) { // if there is nothing in textarea, prompt user and stop from submitting tweet
        $('.errMessage').text('Pop a tweet in, it\'s empty!');
        return false;
      } else {
        return true; // else the form is valid
      }
    }
    if (validateForm() === false) { //  put in if statement because there needs and else part to it
      event.stopPropagation();
    } else { // run ajax request if form is true
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: formContent,
      })
      .then(function (data) {
        $('#tweetErrorMessage').text('');
        loadTweets(); //  call on loadtweets to render to the page. (asych - callback function)
        $('.tweet-form')[0].reset(); // clear the input area of form 
      })
    }
  })

  //  Fetching tweets with AJAX
  function loadTweets() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      // data: $('.tweet-form').serialize(),
      success: function (results) {
        renderTweets(results);
      },
      error: function (err) {
        console.log('Error: Failed to called AJAX', err);
      }
    });
  }

  //  Toggle form
  $(function() {
    $('.new-tweet').hide(); //  hide the form on load
    $('button').click(function() { // when the (compose) button is clicked...
      $('.new-tweet').slideToggle();  // slide down the compose form
      $('textarea').focus();  // Auto select the textarea
    })
  }) 

  // Display error on form  
  var displayErrors = function() {
    var form = $(this),
        errorList = $('textarea', form );
    var showErrorList = function() {
      errorList.empty();

    }
  }
});

/* source for time function: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site */
