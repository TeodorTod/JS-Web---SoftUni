const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
    autor: String,
    content: { type: String, required: true }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;

