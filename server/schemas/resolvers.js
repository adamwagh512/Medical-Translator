const { User, Accounts } = require('../models');

const resolvers = {
    Query: {
        Users: async () => {
            return User.find({});
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