const { Router } = require('express');

const {
  getAllUsers,
  getSingleUser,
  CreateUser,
  deleteUser,
  User,
} = require('../../controllers/api/users');

const router = Router;

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', CreateUser);
router.delete('/:id', deleteUser);
router.use('./:id/thoughts', User);

module.exports = router;
