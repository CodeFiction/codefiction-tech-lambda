const express = require('express'),
    app = express(),
    parser = require('rss-parser'),
    PodcastModel = require('./models/Podcast.model'),
    rssUrl = 'http://feeds.soundcloud.com/users/soundcloud:users:264614350/sounds.rss';

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/podcasts/', (req, res) => {
    parser.parseURL(rssUrl, (err, rss) => {
        let items = [],
            list = rss.feed.entries;

        for (let i = 0; i < list.length; i++) {
            let listItem = list[i];
            let podcast = new PodcastModel(
                listItem.title,
                listItem.link,
                listItem.itunes.duration,
                listItem.itunes.image,
                listItem.pubDate,
                listItem.content
            );

            items.push(podcast);
        }
        res.json(items);
    });
});

app.get('/podcasts/search', (req, res) => {
    let keyword = req.query.keyword;
    if (!keyword) {
        res.json([]);
        return;
    }

    keyword = keyword.toLowerCase();

    parser.parseURL(rssUrl, (err, rss) => {
        let items = [],
            list = rss.feed.entries;

        for (let i = 0; i < list.length; i++) {
            let content,
                title,
                listItem = list[i];

            content = listItem.content.toLowerCase();
            title = listItem.title.toLowerCase();

            if (content.includes(keyword) || title.includes(keyword)) {
                let podcast = new PodcastModel(
                    listItem.title,
                    listItem.link,
                    listItem.itunes.duration,
                    listItem.itunes.image,
                    listItem.pubDate,
                    listItem.content
                );

                items.push(podcast);
            }
        }

        res.json(items);
    });
});

module.exports = app;