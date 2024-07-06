import Post from' ../Model/Model';

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).send(err);
    }
};

const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
        res.status(201).send('Post created');
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getAllPosts,
    createPost,
};
