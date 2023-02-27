const { Router } = require("express");
const router = Router();

const designsRouter = require("./designs");
const tagsRouter = require("./tags");
const usersRouter = require("./users");
const favoritesRouter = require("./favorites");

router.use("/designs", designsRouter);
router.use("/tags", tagsRouter);
router.use("/users", usersRouter);
router.use("/favorites", favoritesRouter);

module.exports = router;
