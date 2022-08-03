const { Router } = require('express');

const router = Router;

router.get('/', getAllThoughts);
router.get('/:id', getSingleThoughts);
router.post('/', CreateThoughts);
router.delete('/:id', deleteThoughts);
router.use('./:id/thoughts', Thoughts);

module.exports = router;
