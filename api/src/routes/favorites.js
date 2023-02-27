const router = require("express").Router();
const postFavorite = require("../controllers/favorites/postFavorite.js");
const deleteFavorite = require("../controllers/favorites/deleteFavorite.js");

router.post("/", postFavorite);
router.delete("/", deleteFavorite);

module.exports = router;
