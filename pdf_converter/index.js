const fs = require("fs");
const { mdToPdf } = require("md-to-pdf");

(async() => {
	const pdf = await mdToPdf({ path: "src/templates/index.md" }, { dest: "pdf_converter/out/output.pdf" }).catch(console.error);

	if (pdf) {
		fs.writeFileSync(pdf.filename, pdf.content);
	}
})();
