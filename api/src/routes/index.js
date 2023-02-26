const { Router } = require("express");
const router = Router();

const designsRouter = require ('./designs');
const tagsRouter = require ('./tags');
const usersRouter = require ('./users');

router.use('/designs', designsRouter);
router.use('/tags', tagsRouter);
router.use('/users', usersRouter);

module.exports = router;

