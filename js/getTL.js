const client = require('./client');

const params = {
  count: 50
}; //200件まで取得可能。デフォルトは20

client.get('statuses/home_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
