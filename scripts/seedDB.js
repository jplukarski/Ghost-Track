const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ghost-track-articles"
);

const articleSeed = [
    {
        title: "This 1 Article",
        author: "Joey JoeJoe",
        main_picture: "https://www.fillmurray.com/460/300",
        article_body: "I like 2 listen 2 good music",
        additional_pics: ["https://www.fillmurray.com/460/300", "https://www.fillmurray.com/300/200"],
        video_link: "<iframe width='560' height='315' src='https://www.youtube.com/embed/Gy9MbVOO9Ug' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        category: "News"
    }
];

db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });