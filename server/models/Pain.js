const {Schema, model} = require ("mongoose")

const painSchema = new Schema (
    {
        // When did the pain start? What were you doing when the pain began
        onset: {
            type: Schema.Types.String,
            required: true
        },
        // Does anything make the pain better or worse?
        provocation: {
            type: Schema.Types.String,
            required: true
        },
       
        // Is the pain sharp, dull, aching, burning, tearing etc...
        quality: {
            type: Schema.Types.String,
            required: true
        },
        
         // Where does it hurt?
         location: {
            type: Schema.Types.String,
            required: true
        }, 

         // Scale of 0-10
         severity: {
            type: Schema.Types.Number,
            required: true
        }, 

        //Is the pain the same intensity as when it started? Has it changed, increased or decreased?
        timing: {
            type: Schema.Types.String,
            required: true
        }, 
    
    },
   
)

const Pain = model ("Pain", painSchema)

module.exports = Pain;