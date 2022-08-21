const { Router } = require('express');

const {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/api/thoughts');
const {
  createNewReaction,
  deleteReaction,
} = require('../../controllers/api/reactions');

const router = Router();

router.get('/', getAllThought);
router.get('/:id', getSingleThought);
router.post('/', createThought);
router.post('/:id', updateThought);
router.delete('/:id', deleteThought);
router.post('/:id/reaction', createNewReaction);
router.delete('/:thoughtId/reaction/:reactionId', deleteReaction);

module.exports = router;
