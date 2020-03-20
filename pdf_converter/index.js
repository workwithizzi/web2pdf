require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { mdToPdf } = require("md-to-pdf");

const listDirectories = require("./listDirectories");

(async() => {
	const templatesDir = "src/templates/";

	const listTemplatesDir = await listDirectories(templatesDir);

	listTemplatesDir
		.filter(dir => dir.isDirectory())
		.map(dir => dir.name)
		.map(async dir => {
			const proposalPath = path.join("src/templates/", dir);
			const proposalPathIn = path.join(proposalPath, "index.md");
			const proposalPathOut = path.join(proposalPath, "proposal.pdf");

			const files = await listDirectories(proposalPath);
			console.log(files.map(dir => dir.name));
			if (files.map(dir => dir.name).includes("index.md")) {
				const pdf = await mdToPdf({ path: proposalPathIn }, { dest: proposalPathOut }).catch(console.error);
				if (pdf) {
					fs.writeFileSync(pdf.filename, pdf.content);
				}
			} else {
				console.log("nothing to convert");
			}
		});
})();
