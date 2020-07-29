const express = require('express');

const router = express();
const whoami = require('../controllers/whoamiControllers')

router.get('/', whoami);

module.exports = router;
