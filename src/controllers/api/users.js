const getAllUsers = (req, res) => {
  console.log('all users');
};
const getSingleUser = (req, res) => {
  console.log('1 users');
};
const createUser = (req, res) => {
  console.log('create users');
};
const updateUser = (req, res) => {
  console.log('update users');
};
const deleteUser = (req, res) => {
  console.log('delete users');
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
