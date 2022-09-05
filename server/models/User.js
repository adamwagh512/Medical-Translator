const {Schema, model} = require ("mongoose")


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
        ],
        Contact: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Contact'
            }
        ],
        Physician: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Physician'
            }
        ],
        History: [
            {
                type: Schema.Types.ObjectId,
                ref: 'History'
            }
        ],
        Surgery: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Surgery'
            }
        ],
        Pain: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Pain'
            }
        ],
        Emergency: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Emergency'
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