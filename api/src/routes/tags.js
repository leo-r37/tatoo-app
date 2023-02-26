const router = require('express').Router();
const getTags = require('../controllers/tags/getTags');

router.get('/', getTags);

module.exports = router;