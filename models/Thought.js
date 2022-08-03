const { Schema, model } = require('mongoose');

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
    minLength: 2,
    maxLength: 50,
  },
  reactions: {
    //Array of nested documents created with the reactionSchema
    type: Object,
  },
};

const schema = new Schema(ThoughtSchema);

const Thought = model('Thought', schema);

module.exports = Thought;
