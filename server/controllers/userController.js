const {User, Accounts} = require('../models');

module.exports = {
  //find all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //find a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => {
        return Accounts.findOneAndUpdate(
          { _id: req.body.accountId },
          { $addToSet: { Users: user._id } },
          { new: true }
        );
      })
      .then((user) =>
        !Accounts
          ? res.status(404).json({
              message: 'User created, but found no Account with that ID',
            })
          : res.json('Created the User')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : Accounts.findOneAndUpdate(
              { videos: req.params.userId },
              { $pull: { videos: req.params.userId } },
              { new: true }
            )
      )
      .then((account) =>
        !Accounts
          ? res
              .status(404)
              .json({ message: 'user created but no account with this id!' })
          : res.json({ message: 'User successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
