import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import downloadFile from "../../pdf_converter/out/output.pdf";

const IndexPage = () => {

	return (
		<Layout>
			<SEO title="Home" />
			<Header />
			<a href={downloadFile} download>Download</a>
		</Layout>
	);
};

	

export default IndexPage;
