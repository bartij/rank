const express = require('express');
const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./router');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('client/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port, function(error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});
