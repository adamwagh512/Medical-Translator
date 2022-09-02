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
        users: [
            {
                type:Schema.Types.ObjectId,
                ref: 'User',
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