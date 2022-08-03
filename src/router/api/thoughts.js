const { Router } = require('express');

const {
  getAllThoughts,
  getSingleThoughts,
  CreateThoughts,
  deleteThoughts,
  thoughts,
} = require('../../controllers/api/thoughts');

const router = Router;

router.get('/', getAllThoughts);
router.get('/:id', getSingleThoughts);
router.post('/', CreateThoughts);
router.delete('/:id', deleteThoughts);
router.use('./:id/thoughts', Thoughts);

module.exports = router;
