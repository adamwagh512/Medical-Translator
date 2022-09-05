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
        createAccount: async (parent, {email, password}) => {
            return Account.create({email: email, password: password});
        },

        // Delete an Account 
        deleteAccount: async (parent, {_id}) => {
            return Account.findOneAndDelete({_id})
        },
        //Update an Account


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
        // Deletes a User
        deleteUser: async (parent, {_id}) => {
            return  User.findOneAndDelete(
                 { _id}, 
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
        //Deletes a med
        deleteMed: async (parent, {_id}) => {
           return  Med.findOneAndDelete(
                { _id}, 
            )
        },
// Allergy Mutations 
        //create an allergy and assign it to user by ID
        createAllergy: async (parent, {allergin, reaction, _id}) => {
            const newAllergy = await Allergy.create({allergin, reaction})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Allergies: newAllergy } },
                {new:true}
            )
        },
        // deletes an Allergy
        deleteAllergy: async (parent, {_id}) => {
            return  Allergy.findOneAndDelete(
                 { _id}, 
             )
         },
//Contact Mutations
        //Create emergency contact and assign it to user by ID
        createContact: async (parent, {name, email, phone, _id}) => {
            const newContact = await Contact.create({name, email, phone})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Contact: newContact } },
                {new:true}
            )
        },
        //deletes a contact
        deleteContact: async (parent, {_id}) => {
            return  Contact.findOneAndDelete(
                 { _id}, 
             )
         },
// Physician Mutations
        //Create a physician contact and assign it to user by ID
        createPhysician: async (parent, {name, speciality, email, phone, _id}) => {
            const newPhysician = await Physician.create({name, speciality, email, phone})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Physician: newPhysician } },
                {new:true}
            )
        },
        // Deletes a physician
        deletePhysician: async (parent, {_id}) => {
            return  Physician.findOneAndDelete(
                 { _id}, 
             )
         },
//History Mutations
        //Create a History item and assign it to user by ID
        createHistory: async (parent, {issue, _id}) => {
            const newHistory = await History.create({issue})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { History: newHistory } },
                {new:true}
            )
        },
        //delete History
        deleteHistory: async (parent, {_id}) => {
            return  History.findOneAndDelete(
                 { _id}, 
             )
         },
//Surgery Mutations
         //create a surgury item and assign it to a user by ID
        createSurgery: async (parent, {description, date, hospital, hospitalCity, surgeon, _id}) => {
            const newSurgery = await Surgery.create({description, date, hospital, hospitalCity, surgeon})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Surgery: newSurgery } },
                {new:true}
            )
        },
        //delete a surgery
        deleteSurgery: async (parent, {_id}) => {
            return  Surgery.findOneAndDelete(
                 { _id}, 
             )
         },
// Pain Mutations
         //Create a pain assessment item and assign it to a user by ID
        createPain: async (parent, {onset, provocation, quality, location, severity, timing, _id}) => {
            const newPain = await Pain.create({onset, provocation, quality, location, severity, timing})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Pain: newPain } },
                {new:true}
            )
        },
        //delete pain assessment
        deletePain: async (parent, {_id}) => {
            return  Pain.findOneAndDelete(
                 { _id}, 
             )
         },
//Emergency Mutations
         //Create an emergency item and assign it to a user by ID
        createEmergency: async (parent, {currentProblem, _id}) => {
            const newEmergency = await Emergency.create({currentProblem})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Emergency: newEmergency } },
                {new:true}
            )
        },
        deleteEmergency: async (parent, {_id}) => {
            return  Emergency.findOneAndDelete(
                 { _id}, 
             )
         },
    },
};

module.exports = resolvers;