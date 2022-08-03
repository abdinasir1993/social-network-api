const router = require('express').router();
const userRoutes = require('./users');
const thoughtsRoutes = require('./thoughts');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
