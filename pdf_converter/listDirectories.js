const fs = require("fs");

const listDirectories = path =>
	new Promise((resolve, reject) => {
		fs.readdir(path, { withFileTypes: true }, (error, files) => {
			if (error) {
				reject(error);
			} else {
				resolve(files);
			}
		});
	});

module.exports = listDirectories;
