const client = require('./client');

const tweet = function(text) {
    const params = {
        status: text
    };

    client.post('statuses/update', params, function(error, tweet, response) {
        if (!error) {
            console.log(tweet);
        } else {
            console.log('error');
        }
    });
};

module.exports = tweet;

tweet(process.argv[2]);
