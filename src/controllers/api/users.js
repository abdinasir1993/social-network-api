const { User } = require('../../../models');

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    return res.json({ data: user });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request ${error.message}`
    );
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('thoughts');

    console.log(user);
    if (!user) {
      return res.status(404).json({ success: false });
    }
    return res.json({ data: user });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request ${error.message}`
    );
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    await User.create(user);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request ${error.message}`
    );
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request ${error.message}`
    );
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: '[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!',
      });
      return;
    }
    await User.deleteOne(user);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request ${error.message}`
    );
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
