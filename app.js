var express = require('express'),
    app = express(),
    parser = require('rss-parser'),
    rssUrl = 'http://feeds.soundcloud.com/users/soundcloud:users:264614350/sounds.rss';

app.get('/episodes', function(req, res) {
    parser.parseURL(rssUrl, function(err, rss) {
        var items = [],
            list = rss.feed.entries;
        for (var i = 0; i < list.length; i++) {
            items.push({
                title: list[i].title,
                url: list[i].link,
                duration: list[i].itunes.duration,
                image: list[i].itunes.image,
                date: list[i].pubDate,
                description: list[i].content,
            });
        }
        res.send(items);
    });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;