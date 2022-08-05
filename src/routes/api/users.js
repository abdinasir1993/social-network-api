const { Router } = require('express');

const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/api/users');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
