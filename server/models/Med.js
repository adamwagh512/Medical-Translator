const {Schema, model} = require ("mongoose")

const medSchema = new Schema (
    {
        medName: {
            type: Schema.Types.String,
            required: true
        }, 
        dose: {
            type: Schema.Types.Number,
            required: true
        },
        unit: {
            type: Schema.Types.String,
            required: true,

        },
    },
   
)

const Med = model ("Med", medSchema)

module.exports = Med;