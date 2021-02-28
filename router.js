var express = require('express');
var router = express.Router();

var video_controller = require('./VideoController');


//Get  metadata about a specific file, defined by video_name
router.get('/:video_name', (req, res) => {
  video_controller.video_properties(req, res);
})


//no file name is provioded ==> give information about test file
router.get('/', (req, res) => {
  video_controller.get_Video(req, res);
})
module.exports = router;
