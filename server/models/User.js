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
            type: Schema.Types.String,
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
        Allergies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Allergy'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        
    }   
)

const User = model ("User", userSchema)

module.exports = User;