const { Router } = require('express');

const {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/api/thoughts');

const router = Router();

router.get('/', getAllThought);
router.get('/:id', getSingleThought);
router.post('/', createThought);
router.post('/:id', updateThought);
router.delete('/:id', deleteThought);

module.exports = router;
