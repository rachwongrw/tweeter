const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetFooter() {
  return `<footer class="tweet-footer"> ${tweetData.created_at}
  <div class="icons">
      <img class="hover" src="http://simpleicon.com/wp-content/uploads/flag.png">
      <img class="hover" src="https://cdn0.iconfinder.com/data/icons/arrows-1-5/128/Retweet-Refresh-Reply-Sync-Tweet-Arrow-Motion-512.png">
      <img class="hover" src="https://www.freeiconspng.com/uploads/love-heart-icon-14.png">
  </div>
</footer>
`;
}

function createTweetElement(tweetData) {
  var $tweet = $(`<article class="tweet">
  <header class="tweet-header">
      <img src="${tweetData.user.avatars.small}">
      <h2>${tweetData.user.name}</h2>
      <span>${tweetData.user.handle}</span>
  </header>    
    <p class="tweet-content">${tweetData.content.text}</p>
</article>`).append(createTweetFooter());
  return $tweet;
}

var $tweet = createTweetElement(tweetData);
$('#tweets-container').append($tweet);


/* 
------------------------------------
The over engineered code - for LOLs 
------------------------------------

function createTweetHeader() {
  return `<header class="tweet-header">
  <img src="${tweetData.user.avatars.small}">
  <h2>${tweetData.user.name}</h2>
  <span>${tweetData.user.handle}</span>
</header> `;
};


function createTweetFooter() {
  return `<footer class="tweet-footer"> ${tweetData.created_at}
  <div class="icons">
      <img class="hover" src="http://simpleicon.com/wp-content/uploads/flag.png">
      <img class="hover" src="https://cdn0.iconfinder.com/data/icons/arrows-1-5/128/Retweet-Refresh-Reply-Sync-Tweet-Arrow-Motion-512.png">
      <img class="hover" src="https://www.freeiconspng.com/uploads/love-heart-icon-14.png">
  </div>
</footer>`;
};

function createTweetElement(tweetData) {
  var $tweet = $(`<article class="tweet">   
  <p class="tweet-content">${tweetData.content.text}</p>
</article>`);
  $tweet.prepend(createTweetHeader());
  $tweet.append(createTweetFooter());
  return $('#tweets-container').append($tweet);
} 

var $tweet = createTweetElement(tweetData);

*/