const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    img: String,
    title: String,
    text: String,
    category: String,
    detailedText: String,
    descriptionImg: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
