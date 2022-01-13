const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat')

// Schema to create raction model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'This field is required',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;