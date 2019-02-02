const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({

    title: { type: String, required: true },
    author: { type: String, required: true },
    main_picture: { type: String, required: true },
    article_body: { type: String, required: true },
    additional_pics: { type: String, required: true },
    video_link: { type: String, required: true },
    podcast_link: { type: String, required: true },
    song_link: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    date: { type: Date, default: Date.now }

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
