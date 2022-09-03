const {Schema, model} = require ("mongoose")

const medSchema = new Schema (
    {
        medName: {
            type: String,
            required: true
        }, 
        dose: {
            type: Schema.Types.Number,
            required: true
        },
        unit: {
            type: String,
            required: true,

        },
    },
   
)

const Med = model ("Med", medSchema)

module.exports = Med;