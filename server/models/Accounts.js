const {Schema, model} = require ("mongoose")


const accountSchema = new Schema (
    {
        email: {
            type: Schema.Types.String,
            required: true
        }, 
        password: {
            type: Schema.Types.String,
            required: true,
            
            
        },
        Users: [
            {
                type:Schema.Types.ObjectId,
                ref: 'User',
                
        }
        ],
    },
)

const Account = model ("Account", accountSchema)

module.exports = Account