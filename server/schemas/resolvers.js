const { User, Accounts, Med } = require('../models');

const resolvers = {
    Query: {
        //find all meds
        Meds: async() => {
            return Med.find({})
        },
        //find all users and populate all the associated meds for each user
        Users: async () => {
            return User.find({}).populate('Meds');
        },
        //find all accounts and populate all the associated users for each account
        Account: async () => {
            return Accounts.find({}).populate('Users').populate({
                path: 'Users',
                populate:'Meds'
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
        createUser: async (parent, {firstName, lastName, DOB, smoker}) => {
            return await User.create({firstName, lastName, DOB, smoker})
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
        }
    },
};

module.exports = resolvers;