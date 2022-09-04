const {Schema, model} = require ("mongoose")

const emergencySchema = new Schema (
    {
        //Maybe we can think of something better later, for now I am leaving a basic input box for people to describe what is happening right now.
        currentProblem: {
            type: Schema.Types.String,
            required: true
        }, 
    
    },
   
)

const Emergency = model ("Emergency", emergencySchema)

module.exports = Emergency;