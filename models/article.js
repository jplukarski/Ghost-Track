const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({

    title: { type: String, required: true },
    author: { type: String, required: true },
    main_picture: { type: String, required: true },
    article_body: { type: String, required: true },
    additional_pics: { type: String },
    video_link: { type: String },
    podcast_link: { type: String },
    song_link: { type: String },
    category: { type: String, required: true },
    subcategory: { type: String },
    date: { type: String, required: true },
    tags: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    song: { type: String, required: true },
    genre: { type: String, required: true },
    city: { type: String, required: true },
    release_date: { type: String, required: true },
    our_take: { type: String, required: true },

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
