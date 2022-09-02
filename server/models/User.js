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
        DOB: {
            type: String,
            required: true,

        },
        smoker: {
            type: Boolean,
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

module.exports = User;