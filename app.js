const express = require('express');

const app = express();

var video_router = require('./router');

app.use('/video', video_router);

//Listen to request
app.listen(8080);
