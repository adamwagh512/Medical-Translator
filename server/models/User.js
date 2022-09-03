const {Schema, model} = require ("mongoose")
const Med = require('./Med')

const userSchema = new Schema (
    {
        firstName: {
            type: Schema.Types.String,
            required: true
        }, 
        lastName: {
            type: Schema.Types.String,
            required: true
        },
        DOB: {
            type: Schema.Types.Date,
            required: true,

        },
        smoker: {
            type: Schema.Types.Boolean,
            required: true
            
        },
        Meds: [
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