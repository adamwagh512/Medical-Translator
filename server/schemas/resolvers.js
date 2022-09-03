const { User, Accounts, Med, Allergy, History, Contact, Surgery, Physician } = require('../models');
const Account = require('../models/Accounts');
const { populate } = require('../models/History');

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
            return User.find({}).populate('Meds').populate('Allergies').populate('Contact').populate('Physician');
        },
        //find all accounts and populate all the associated users for each account
        Account: async () => {
            return Accounts.find({}).populate('Users').populate({
                path: 'Users',
                populate:['Meds', 'Allergies', 'Contact', 'Physician'],
        //Can populate one or the other, but not both
                // path: 'Users',
                // populate:'Allergies'
            });
        }

        // Account: async (parent, { _id }) => {
        //     const params = _id ? { _id } : {};
        //     return Account.findOn(params);
        // },
    },
    Mutation: {
        // Account Mutations
        createAccount: async (parent, args) => {
            const Account = await Account.create(args);
            return Account;
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

        //query for user of med
        //create med
        //assign med to user
        createMed: async (parent, {medName, dose, unit, _id}) => {
            const medication = await Med.create({medName, dose, unit})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Meds: medication } },
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
    },
};

module.exports = resolvers;