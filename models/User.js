const {Schema, model } = require('mongoose');

const  UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, 
            required: 'Please insert your username',
            trim: true,
        },
        email: {
        type:String,        
        required: 'Please insert your email!',
        unique:true,
        validate: {
            validator(validEmail) {
              return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/.test(
                validEmail
              );
            },
            message: "Please enter a valid email address",
          },

        },
        
          //embebed document syntax [{}]
          thoughts: [{
              type: Schema.Types.ObjectId,
              ref: 'Thought'
          }],
          frieds: [{
              type: Schema.Types.ObjectId,
              ref: 'User'
          }]
        },
    {
        toJSON: {
                virtuals: true,
                getters: true
            },
            id: false
    }
);
//virtual countdown

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model ('User', UserSchema)

module.exports = User
