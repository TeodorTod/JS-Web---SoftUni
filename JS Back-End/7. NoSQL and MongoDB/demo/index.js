const mongoose = require("mongoose");
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const connectionString = "mongodb://localhost:27017/testdb";

start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    console.log("Database connected");

    await Comment.create({
        author: 'John',
        content: 'Nice Article'
    });
   /*
    const comment = await Comment.findOne({});
    const post = await Post.findOne({});
    post.comments.push(comment);

     await post.save();

    */

     const post = await Post.findOne({}).populate('comments', 'content');
     console.log(post);

} 