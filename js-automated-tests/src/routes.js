const express = require('express');
const bodyParser = require('body-parser');
const PointsController = require('./controllers/Points')
const router = express.Router();

router.use(bodyParser.json())
router.use(PointsController);

module.exports = router;