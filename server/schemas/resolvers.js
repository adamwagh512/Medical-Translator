const { User, Account, Med, Allergy, History, Contact, Surgery, Physician, Pain, Emergency } = require('../models');


const resolvers = {
    Query: {
        Allergies: async() => {
            return Allergy.find({})
        },

        //find all meds
        Meds: async() => {
            return Med.find({})
        },
        //find all users and populate all the associated meds, allergies for each user
        Users: async () => {
            return User.find({}).populate(['Meds', 'Allergies','Contact','Physician','History','Surgery', 'Pain', 'Emergency'])

            // return User.find({}).populate('Meds').populate('Allergies').populate('Contact').populate('Physician').populate('History').populate('Surgery');
        },
        //find all accounts and populate all the associated users for each account
        Account: async () => {
            return Account.find({}).populate('Users').populate({
                path: 'Users',
                populate:['Meds', 'Allergies', 'Contact', 'Physician', 'History','Surgery', 'Pain', 'Emergency'],
            });
        }
    },
    Mutation: {
// Account Mutations
        // Make a new Account
        //Not working yet. Ill come back to it.
        createAccount: async (parent, {email, password}) => {
            console.log(email)
            return Account.create({email: email, password: password});
        },

        // Delete an Account 
        deleteAccount: async (parent, {_id}) => {
            return Account.findOneAndDelete({_id})
        },


// User Mutations
        //Create a new user
        createUser: async (parent, {firstName, lastName, DOB, smoker, _id}) => {
            const newUser = await User.create({firstName, lastName, DOB, smoker})
            return await Account.findByIdAndUpdate(
                { _id }, 
                { $push: { Users: newUser } },
                {new:true}
            )
        },
     
// Med Mutations
        //Create a new med
        createMed: async (parent, {medName, dose, unit, _id}) => {
            const medication = await Med.create({medName, dose, unit})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Meds: medication } },
                {new:true}
            )
        },

        deleteMed: async (parent, {userId, medId}) => {
           return await User.findOneAndUpdate(
                { _id: userId }, 
                { $pull: { Meds: {medId} } },
                {new:true}
            )
        },
        //create an allergy and assign it to user by ID
        createAllergy: async (parent, {allergin, reaction, _id}) => {
            const newAllergy = await Allergy.create({allergin, reaction})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Allergies: newAllergy } },
                {new:true}
            )
        },
        //Create emergency contact and assign it to user by ID
        createContact: async (parent, {name, email, phone, _id}) => {
            const newContact = await Contact.create({name, email, phone})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Contact: newContact } },
                {new:true}
            )
        },
        //Create a physician contact and assign it to user by ID
        createPhysician: async (parent, {name, speciality, email, phone, _id}) => {
            const newPhysician = await Physician.create({name, speciality, email, phone})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Physician: newPhysician } },
                {new:true}
            )
        },
        //Create a History item and assign it to user by ID
        createHistory: async (parent, {issue, _id}) => {
            const newHistory = await History.create({issue})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { History: newHistory } },
                {new:true}
            )
        },
        createSurgery: async (parent, {description, date, hospital, hospitalCity, surgeon, _id}) => {
            const newSurgery = await Surgery.create({description, date, hospital, hospitalCity, surgeon})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Surgery: newSurgery } },
                {new:true}
            )
        },
        createPain: async (parent, {onset, provocation, quality, location, severity, timing, _id}) => {
            const newPain = await Pain.create({onset, provocation, quality, location, severity, timing})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Pain: newPain } },
                {new:true}
            )
        },
        createEmergency: async (parent, {currentProblem, _id}) => {
            const newEmergency = await Emergency.create({currentProblem})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Emergency: newEmergency } },
                {new:true}
            )
        },
    },
};

module.exports = resolvers;