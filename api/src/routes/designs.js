const router = require("express").Router();
const getDesigns = require("../controllers/designs/getDesigns");
const postDesigns = require("../controllers/designs/postDesigns");
const putDesigns = require("../controllers/designs/putDesigns");

router.get("/", getDesigns);
router.get("/:id", getDesigns);
router.post("/", postDesigns);
router.put("/:id", putDesigns);

module.exports = router;
