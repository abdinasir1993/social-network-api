const router = require('express').router();
const userRoutes = require('./users');
const thoughtsRoutes = require('./thoughts');
const friendsRoutes = require('./friends');
const reactionsRoutes = require('./reactions');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.user('/friends', friendsRoutes);
router.use ('/reaction', reactionsRoutes)

module.export = router;
