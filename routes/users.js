const express = require('express');
const router = express.Router();

const {profile} = require('../controller/userController');
/* api/users */
router
    .get('/',profile);

module.exports = router;
