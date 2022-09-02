const {Schema, model} = require ("mongoose")
const Med = require('./Med')

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
        meds: [
            {
                type:Schema.Types.ObjectId,
                ref: 'Med'
        }
        ],
    },
    {
        toJSON: {
            virtuals: true
        },
        
    }   
)

const User = model ("User", userSchema)

module.exports = User;