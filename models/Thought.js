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
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  reactions: [reactionSchema],
};

const schema = new Schema(ThoughtSchema);

const Thought = model('Thought', schema);

module.exports = Thought;
