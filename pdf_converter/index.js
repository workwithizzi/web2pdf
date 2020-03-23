const fs = require("fs");
const path = require("path");

const { mdToPdf } = require("md-to-pdf");

const config = require("./config");
const listDirectories = require("./listDirectories");

(async() => {
	try {
		// Directory that contains directories with `md` files that are going to be converted into PDFs.
		const templatesDir = config.srcDir;

		// Get `fs.Dirent` object: https://nodejs.org/api/fs.html#fs_class_fs_dirent
		const listTemplatesDir = await listDirectories(templatesDir);

		const listDirsInTemplates = listTemplatesDir
			// filter and return only `dir` types, skip files
			.filter(dir => dir.isDirectory())
			// list directories as String []
			.map(dir => dir.name);

		listDirsInTemplates.map(async dir => {
			// path to the one of many proposal directories
			const proposalPath = path.join(config.srcDir, dir);
			// path to the input `md` file which is going to be converted into the pdf
			const proposalPathIn = path.join(proposalPath, config.mdInputFileName);
			// path to the output pdf file
			const proposalPathOut = path.join(proposalPath, `${dir}.pdf`);

			// list all the files in each proposal directory as `fs.Dirent` object
			const files = await listDirectories(proposalPath);

			// list all the files in each proposal directory as String []
			const listFiles = files.map(file => file.name);

			// if `listFiles` array contains `index.md` (input `md` file which is going to be converted into the pdf), generate the PDF of it
			if (listFiles.includes(config.mdInputFileName)) {
				const pdf = await mdToPdf({ path: proposalPathIn }, { dest: proposalPathOut }).catch(console.error);
				if (pdf) {
					fs.writeFileSync(pdf.filename, pdf.content);
				}
			} else {
				console.log("There is nothing to convert.");
			}
		});
	} catch (error) {
		throw new Error(error);
	}
})();
