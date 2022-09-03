const {Schema, model} = require ("mongoose")

const contactSchema = new Schema (
    {
        name: {
            type: Schema.Types.String,
            required: true
        }, 
        speciality: {
            type: Schema.Types.String,
        }, 
        email: {
            type: Schema.Types.String,
        }, 
        phone: {
            type: Schema.Types.String,
        }, 
        name: {
            type: Schema.Types.String,
        }, 
    
    },
   
)

const Contact = model ("Contact", contactSchema)

module.exports = Contact;