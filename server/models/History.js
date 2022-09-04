const {Schema, model} = require ("mongoose")

const historySchema = new Schema (
    {
        issue: {
            type: Schema.Types.String,
            required: true
        }, 
    
    },
   
)

const History = model ("History", historySchema)

module.exports = History;