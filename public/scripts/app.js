$(() => { //  IIFE to load HTML before the JS 
  loadTweets(); 

  function renderTweets(data) {
    data.forEach(function (i) {
      const $eachTweet = createTweetElement(i);
      $('#tweets-container').prepend($eachTweet); //prepend to have the latest tweet to add to the the top
    })
  }

  // renderTweets(data);

  function createTweetElement(data) {
    const $makeArticle = $(`<article>`).addClass('tweet'); // make empty article
    const $makeHeader = $(`<header>`).addClass('tweet-header').appendTo($makeArticle); // make header
    const $addDP = $(`<img>`).prop(`src`, data.user.avatars.small).appendTo($makeHeader); //  add icon to header
    const $addName = $(`<h2>`).text(data.user.name).appendTo($makeHeader); // add name to header
    const $addHandle = $(`<span>`).text(data.user.handle).appendTo($makeHeader); // add handle to header
    // add tweet content
    const $tweetContent = $(`<p>`).text(data.content.text).addClass('tweet-content').appendTo($makeArticle);
    // add footer
    const $makeFooter = $(`<footer>`).text(data.created_at).addClass('tweet-footer').appendTo($makeArticle);
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
      if (textLength > 140) {    // if text length is > 140 then prompt user and stop from submitting tweet
        event.stopPropagation();
        alert("Dayum, you got a lot to say...Tweet is too long!");
        return false;
      } else if (textLength === 0) { // if there is nothing in textarea, prompt user and stop from submitting tweet
        event.stopPropagation();
        alert('Pop a tweet in, it\'s empty!');
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
      data: $('.tweet-form').serialize(),
      success: function (results) {
        renderTweets(results);
      },
      error: function (err) {
        console.log('Error: Failed to called AJAX', err);
      }
    });
  }

});