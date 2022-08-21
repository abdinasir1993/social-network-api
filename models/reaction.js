const { Schema } = require('mongoose');

const reactionSchema = {
  reactionBody: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 280,
  },
  username: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    //Use a getter method to format the timestamp on query
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
