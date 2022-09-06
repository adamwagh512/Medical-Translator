const {Schema, model} = require ("mongoose")
const User = require ("./User")

const accountSchema = new Schema ({
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
    patients: [User]
})

const Account = model ("Account", accountSchema)

module.exports = Account