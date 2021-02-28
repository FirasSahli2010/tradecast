const express = require('express');

const app = express();

exports.video_properties = function (req, res) {
    var ffmpeg = require('ffmpeg');

    meta_data = '99999';
    name = req.params.video_name
    try {
      console.log('File: '+ './'+name)

      var process = new ffmpeg('./'+name);
      process.then(function (video) {
      	console.log('The video is ready to be processed');
        // Video metadata
         meta_data = video.metadata
         // FFmpeg configuration
         console.log(video.info_configuration);
         const subset = (({ filename, audio, video, duration }) => ({ filename, audio, video, duration }))(meta_data);
         console.log(subset);

         // Return a subste of the metadata as required
        res.send(subset);

        // We can return all metadata of the video
        //res.send(meta_data);
      }, function (err) {
         console.log('Error: ' + err);
      });
    } catch (e) {
    	console.log(e.code);
    	console.log(e.msg);
      res.send('Exception');
    }
  }

exports.get_Video = function (req, res) {
  var ffmpeg = require('ffmpeg');

  meta_data = '99999';
  try {
    var process = new ffmpeg('./test.mp4');


    process.then(function (video) {
  		console.log('The video is ready to be processed');
       meta_data = video.metadata
    		// FFmpeg configuration
    		console.log(video.info_configuration);
        res.send(meta_data);
  		}, function (err) {
  			console.log('Error: ' + err);
  		});
  } catch (e) {
  	console.log(e.code);
  	console.log(e.msg);
    res.send('Exception');
  }
}
