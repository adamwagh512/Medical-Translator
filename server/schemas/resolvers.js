const { User, Accounts, Med, Allergy } = require('../models');
const Account = require('../models/Accounts');
const { populate } = require('../models/History');

const resolvers = {
    Query: {
        //find all meds
        Meds: async() => {
            return Med.find({})
        },
        //find all users and populate all the associated meds for each user
        Users: async () => {
            return User.find({}).populate('Meds').populate('Allergies');
        },
        //find all accounts and populate all the associated users for each account
        Account: async () => {
            return Accounts.find({}).populate('Users').populate({
                path: 'Users',
                populate:'Meds'
            }).populate({
                path: 'Users',
                populate:'Allergies'
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
        createAllergy: async (parent, {allergin, reaction, _id}) => {
            const newAllergy = await Allergy.create({allergin, reaction})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Allergies: newAllergy } },
                {new:true}
            )
        }
    },
};

module.exports = resolvers;