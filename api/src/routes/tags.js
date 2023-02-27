const router = require("express").Router();
const getTags = require("../controllers/tags/getTags");
const postTag = require("../controllers/tags/postTag");
const putTag = require("../controllers/tags/putTag");
const deleteTag = require("../controllers/tags/deleteTag");

router.get("/", getTags);
router.post("/", postTag);
router.put("/:id", putTag);
router.delete("/:id", deleteTag);

module.exports = router;
