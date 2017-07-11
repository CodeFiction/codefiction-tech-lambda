var express = require('express'),
    app = express(),
    parser = require('rss-parser'),
    rssUrl = 'http://feeds.soundcloud.com/users/soundcloud:users:264614350/sounds.rss';

app.get('/episodes', function(req, res) {
    parser.parseURL(rssUrl, function(err, feed) {
        var items = [],
            list = feed.rss.channel;
        for (var key in list) {
            if (key === 'item') {
                items.push({
                    title: list[key].title,
                    url: list[key].url,
                    duration: list[key]['itunes:duration'],
                    date: list[key].pubDate,
                    description: list[key].description,
                });
            }
        }
        res.send(items);
    });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;