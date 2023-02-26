const router = require('express').Router();
const getUsers = require('../controllers/users/getUsers.js');

router.get('/', getUsers);
router.get('/:id', getUsers);

module.exports = router;