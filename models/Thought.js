const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const ThoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
};

const schema = new Schema(ThoughtSchema);

const Thought = model('Thought', schema);

module.exports = Thought;
