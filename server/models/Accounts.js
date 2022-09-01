const {Schema, model} = require ("mongoose")
const Users = require('./User')

const accountSchema = new Schema (
    {
        email: {
            type: String,
            required: true
        }, 
        password: {
            type: String,
            required: true
        },
        Users: [
            {
                type:Schema.Types.ObjectId,
                ref: 'Users',
        }
        ],
    },
    {
        toJSON: {
            virtuals: true
        }
    }   
)

const Account = model ("Account", accountSchema)

module.exports = Account