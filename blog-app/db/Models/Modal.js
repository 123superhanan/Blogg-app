import mongoose  from 'mongoose';

const postSchema = new mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    category: String,
    author: String,
    authorInfo: String,
    content: String,
    Authorimage: String,
    info: String,
    detailedInfo: String,
    detailedInfos: String,
    detailedHead: String,
    detailedHead2: String,
    detailedHead3: String,
    detailedHead4: String,
    detailedHead5: String,
    detailedHead6: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
