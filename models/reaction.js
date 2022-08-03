const { Schema } = require('mongoose');

const reactionSchema = {
  reactionId: {
    type: String,
    required: true,
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 280,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
