const Account = require('../models/Accounts');
const User = require('../models/Accounts');

module.exports = {
  getAccounts(req, res) {
    Account.find()
      .then((accounts) => res.json(accounts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleAccount(req, res) {
    Account.findOne({ _id: req.params.accountId })
      .select('-__v')
      .then((account) =>
        !user
          ? res.status(404).json({ message: 'No account with that ID' })
          : res.json(account)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createAccount(req, res) {
    Account.create(req.body)
      .then((dbAccountData) => res.json(dbAccountData))
      .catch((err) => res.status(500).json(err));
  },
  updateAccount(req, res) {
    Account.findOneAndUpdate(
      { _id: req.params.accountId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((account) =>
        !account
          ? res.status(404).json({ message: 'No account with this id!' })
          : res.json(account)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
//delete a user by id
  deleteAccount(req, res) {
    Account.findOneAndDelete({ _id: req.params._id })
      .then(() => res.json({ message: 'Account deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
