const { User, Account } = require('../models');

const resolvers = {
    Query: {
        User: async () => {
            return User.find({});
        },
        Account: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Account.find(params);
        },
    },
    Mutation: {
        createAccount: async (parent, args) => {
            const Account = await Account.create(args);
            return Account;
        },
    },
};

module.exports = resolvers;