$(() => {
  loadTweets();

  function renderTweets(data) {
    data.forEach(function (i) {
      const $eachTweet = createTweetElement(i);
      $('#tweets-container').prepend($eachTweet);
    })
  }

  // renderTweets(data);

  function createTweetElement(data) {
    const $makeArticle = $(`<article>`).addClass('tweet'); // make empty article
    const $makeHeader = $(`<header>`).appendTo($makeArticle).addClass('tweet-header'); // make header
    const $addDP = $(`<img>`).prop(`src`, data.user.avatars.small).appendTo($makeHeader); //  add icon to header
    const $addName = $(`<h2>`).text(data.user.name).appendTo($makeHeader); // add name to header
    const $addHandle = $(`<span>`).text(data.user.handle).appendTo($makeHeader); // add handle to header
    // add tweet content
    const $tweetContent = $(`<p>`).text(data.content.text).addClass('tweet-content').appendTo($makeArticle);
    // add footer
    const $makeFooter = $(`<footer>`).text(data.created_at).appendTo($makeArticle).addClass('tweet-footer');
    const $addIcons = $(`<div>`).appendTo($makeFooter).addClass('icons'); // add div for icons
    const $addFlagIcon = $(`<i class="fas fa-flag"></i>`).appendTo($addIcons); // add each icon
    const $addRetweetIcon = $(`<i class="fas fa-retweet"></i>`).appendTo($addIcons);
    const $addHeartIcon = $(`<i class="fas fa-heart"></i>`).appendTo($addIcons);

    return $makeArticle;
  }

  //  Form Submission Using jQuery/AJAX
  $('.tweet-form').submit(function (event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $('.tweet-form').serialize(),
    })
    .then(function (data) {
      loadTweets(); // callback function - asynchronous. need to call this function to load the tweet
      $('.tweet-form')[0].reset();
    });
  });

  //  Fetching tweets with AJAX
  function loadTweets(event) {
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
