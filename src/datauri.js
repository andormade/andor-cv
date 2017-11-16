const fs = require('fs');
const mime = require('mime');

module.exports = file => {
	const base64 = fs.readFileSync(file, 'base64');
	const mimeType = mime.getType(file);
	return 'data:' + mimeType + ';base64,' + base64;
};
