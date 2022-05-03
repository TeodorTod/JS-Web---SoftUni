const mongoose = require('mongoose');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
 
const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start() {
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected');

    await Comment.create({
        author: 'John',
        content: 'Very respectful comment'
    });

    const post = await Post.findOne({}).populate('comments');
    console.log(post);
}