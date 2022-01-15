const {Schema, model } = require('mongoose')

const  UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, 
            required: 'Please insert your username'
            trim: true,
        },
        email: {
        type:String, 
        unique:true,
        required: 'Please insert your email!',
        validate: {
            validator(validEmail) {
              return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/.test(
                validEmail
              );
            },
            message: "Please enter a valid email address",
          },
        }
    }
)