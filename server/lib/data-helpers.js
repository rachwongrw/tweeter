"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      // var dummytweets = [{
      //   "user": {
      //     "name": "Descartes",
      //     "avatars": {
      //       "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
      //       "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
      //       "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      //     },
      //     "handle": "@rd" },
      //   "content": {
      //     "text": "Je pense , donc je suis"
      //   },
      //   "created_at": 1461113959088
      // }];
      // // callback(null, dummytweets);
      // // callback(null, []);
      // // callback({message:"drat!"}, []);


      // TODO: maybe sort?!?
      db.collection('tweets').find().toArray((err, tweets) => {
        if (err) {
          callback(err)
        } else {
          callback(null, tweets);
        }
      });
    }

  };
};
