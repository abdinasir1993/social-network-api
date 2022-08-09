const { Thought } = require('../../../models');

const getAllThought = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({ data: thoughts });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request| ${error.message}`
    );
  }
};

const getSingleThought = async (req, res) => {
  try {
    const { id } = req.params;
    const thought = await Thought.findById(id);
    if (!thought) {
      return res.status(404).json({ success: false });
    }
    return res.json({ data: thought });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request| ${error.message}`
    );
  }
};

const createThought = async (req, res) => {
  try {
    const thought = req.body;
    await Thought.create(thought);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request| ${error.message}`
    );
  }
};

const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request| ${error.message}`
    );
  }
};

const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;
    const thought = await Thought.findById(id);
    if (!thought) {
      res.status(404).json({
        message: '[ERROR]:please try again could not complete request',
      });
      return;
    }
    await Thought.deleteOne(thought);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]:please try again could not complete request| ${error.message}`
    );
  }
};
module.exports = {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
};
