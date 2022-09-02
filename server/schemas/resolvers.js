const { User, Accounts, Med } = require('../models');

const resolvers = {
    Query: {
        Meds: async() => {
            return Med.find({})
        },
        
        Users: async () => {
            return User.find({}).populate('Meds');
        },
        Account: async () => {
            return Accounts.find({}).populate('Users');
        }

        // Account: async (parent, { _id }) => {
        //     const params = _id ? { _id } : {};
        //     return Account.findOn(params);
        // },
    },
    Mutation: {
        createAccount: async (parent, args) => {
            const Account = await Account.create(args);
            return Account;
        },
    },
};

module.exports = resolvers;