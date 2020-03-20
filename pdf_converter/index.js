require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { mdToPdf } = require("md-to-pdf");

(async() => {
	const proposalPath = path.join("src/templates/", process.env.PROPOSAL_NAME);
	const proposalPathIn = path.join(proposalPath, "index.md");
	const proposalPathOut = path.join(proposalPath, "proposal.pdf");

	const pdf = await mdToPdf({ path: proposalPathIn }, { dest: proposalPathOut }).catch(console.error);

	if (pdf) {
		fs.writeFileSync(pdf.filename, pdf.content);
	}
})();
