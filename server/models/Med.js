const {Schema, model} = require ("mongoose")

const medSchema = new Schema (
    {
        medName: {
            type: String,
            required: true
        }, 
        dose: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true,

        },
    },
   
)

const Med = model ("med", medSchema)

module.exports = Med;