const {Schema, model} = require ("mongoose")

const allergySchema = new Schema (
    {
        allergin: {
            type: Schema.Types.String,
            required: true
        }, 
    
        reaction: {
            type: Schema.Types.String,
            required: true,

        },
    },
   
)

const Allergy = model ("Allergy", allergySchema)

module.exports = Allergy;