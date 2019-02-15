const twitter = require('twitter');
const fs = require('fs');
const keys = JSON.parse(fs.readFileSync(__dirname + '/twitter_key.json', 'utf-8'));

const client = new twitter(keys);

module.exports = client;
