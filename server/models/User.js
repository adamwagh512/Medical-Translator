const {Schema, model} = require ("mongoose")

const userSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
            
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }   
)

const User = model ("User", userSchema)

module.exports = User