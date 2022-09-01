const {User, Accounts} = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // // create a new video
  createUser(req, res) {
    User.create(req.body)
      .then((user) => {
        return Accounts.findOneAndUpdate(
          { _id: req.body._id },
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
  // updateVideo(req, res) {
  //   Video.findOneAndUpdate(
  //     { _id: req.params.videoId },
  //     { $set: req.body },
  //     { runValidators: true, new: true }
  //   )
  //     .then((video) =>
  //       !video
  //         ? res.status(404).json({ message: 'No video with this id!' })
  //         : res.json(video)
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  // },
  // deleteVideo(req, res) {
  //   Video.findOneAndRemove({ _id: req.params.videoId })
  //     .then((video) =>
  //       !video
  //         ? res.status(404).json({ message: 'No video with this id!' })
  //         : User.findOneAndUpdate(
  //             { videos: req.params.videoId },
  //             { $pull: { videos: req.params.videoId } },
  //             { new: true }
  //           )
  //     )
  //     .then((user) =>
  //       !user
  //         ? res
  //             .status(404)
  //             .json({ message: 'Video created but no user with this id!' })
  //         : res.json({ message: 'Video successfully deleted!' })
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  // // Add a video response
  // addVideoResponse(req, res) {
  //   Video.findOneAndUpdate(
  //     { _id: req.params.videoId },
  //     { $addToSet: { responses: req.body } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((video) =>
  //       !video
  //         ? res.status(404).json({ message: 'No video with this id!' })
  //         : res.json(video)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  // // Remove video response
  // removeVideoResponse(req, res) {
  //   Video.findOneAndUpdate(
  //     { _id: req.params.videoId },
  //     { $pull: { reactions: { responseId: req.params.responseId } } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((video) =>
  //       !video
  //         ? res.status(404).json({ message: 'No video with this id!' })
  //         : res.json(video)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
};
