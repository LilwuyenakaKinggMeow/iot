var express = require('express');
var router = express.Router();
var locationController = require('../controllers/location.controller');

router.get('/', locationController.getLocations);
router.post('/create', locationController.createLocations);
router.delete('/deleteAll', locationController.deleteLocations);

module.exports = router;
