const {Schema, model} = require ("mongoose")
const User = require("./User")
const Users = require('./User')

const accountSchema = new Schema (
    {
        email: {
            type: Schema.Types.String,
            required: true
        }, 
        password: {
            type: Schema.Types.String,
            required: true
        },
        Users: [
            {
                type:Schema.Types.ObjectId,
                ref: 'User'
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