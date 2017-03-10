let fun = () => {
	var host = 'localhost';
	var port = 13701;
	var express = require('express');
	var app = express();
	app.listen(port, host, function  () {
		console.log(`服务器已在${host}:${port}打开`);
	});
	app.use('/', express.static(`store`));
	app.get('/', function  (req, res) {
		var dir = __dirname.slice(0, -6);
		console.log(dir)
		res.sendFile(`${dir}store/html/index.html`);
	});
};
exports.server = fun;