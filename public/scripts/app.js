const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(data) {
  data.forEach(function (i) {
    var $eachTweet = createTweetElement(i);
    $('#tweets-container').append($eachTweet);
  })
};

function createTweetElement({
  user: { name, handle, avatars: { small } },
  content: { text },
  created_at
}) {
  const $makeArticle = $(`<article>`).addClass("tweet"); // make empty article
  const $makeHeader = $(`<header>`).appendTo($makeArticle).addClass("tweet-header"); // make header 
  const $addDP = $(`<img>`).prop(`src`, small).appendTo($makeHeader); //  add icon to header 
  const $addName = $(`<h2>`).text(name).appendTo($makeHeader); // add name to header 
  const $addHandle = $(`<span>`).text(handle).appendTo($makeHeader); // add handle to header
  // add tweet content
  const $tweetContent = $(`<p>`).text(text).addClass("tweet-content").appendTo($makeArticle);
  // add footer
  const $makeFooter = $(`<footer>`).text(created_at).appendTo($makeArticle).addClass("tweet-footer");
  // const $addIcons = $(`<div>`).append($makeFooter).addClass("icons"); // add div for icons
  // const $addFlagIcon = $(`<img>`).appendTo($addIcons); // add each icon 
  // const $addRetweetIcon = $(`<img>`).prop(`src`, "https://cdn0.iconfinder.com/data/icons/arrows-1-5/128/Retweet-Refresh-Reply-Sync-Tweet-Arrow-Motion-512.png").appendTo($addIcons); 
  // const $addHeartIcon = $(`<img>`).prop(`src`, "https://www.freeiconspng.com/uploads/love-heart-icon-14.png").appendTo($addIcons);


  // <header class="tweet-header">
  //     <img src="${tweetData.user.avatars.small}">
  //     <h2>${tweetData.user.name}</h2>
  //     <span>${tweetData.user.handle}</span>
  // </header>    
  //   <p class="tweet-content">${tweetData.content.text}</p>
  // <footer class="tweet-footer"> ${tweetData.created_at}
  //   <div class="icons">
  //     <img class="hover" src="http://simpleicon.com/wp-content/uploads/flag.png">
  //     <img class="hover" src="https://cdn0.iconfinder.com/data/icons/arrows-1-5/128/Retweet-Refresh-Reply-Sync-Tweet-Arrow-Motion-512.png">
  //     <img class="hover" src="https://www.freeiconspng.com/uploads/love-heart-icon-14.png">
  //   </div>
  // </footer>
  // </article>`);
  return $makeArticle;
}

renderTweets(data);
