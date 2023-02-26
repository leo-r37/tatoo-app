const router = require("express").Router();
const getUsers = require("../controllers/users/getUsers.js");
const postUser = require("../controllers/users/postUser.js");
const putUser = require("../controllers/users/putUser.js");
const deleteUser = require("../controllers/users/deleteUser.js");

router.get("/", getUsers);
router.get("/:id", getUsers);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

module.exports = router;
