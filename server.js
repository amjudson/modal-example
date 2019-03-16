import express from 'express';
import webpack from 'webpack';
import colors from 'colors';
import webpackDevMiddleware from 'webpack-dev-middleware';
import * as consts from './constants';

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Serve the files on port 3000.
app.listen(consts.port, function (err) {
	open(`http://localhost:${consts.port}`);
	console.log(`Testing app listening on port ${consts.port}!\n`.green);
});
