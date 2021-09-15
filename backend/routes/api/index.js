const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots');

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);

//Auth middleware test routes
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// router.get('/restore-user', restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user);
// });

module.exports = router;
