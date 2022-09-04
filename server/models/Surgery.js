const {Schema, model} = require ("mongoose")

const surgerySchema = new Schema (
    {
        description: {
            type: Schema.Types.String,
            required: true
        }, 
        
        date: {
            type: Schema.Types.String,
        }, 

        hospital: {
            type: Schema.Types.String,
        }, 

        hospitalCity: {
            type: Schema.Types.String,
        },         

        surgeon: {
            type: Schema.Types.String,
            
        }, 
    
    },
   
)

const Surgery = model ("Surgery", surgerySchema)

module.exports = Surgery;