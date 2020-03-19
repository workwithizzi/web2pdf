import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import DownloadPDF from "../components/jsPDF/DownloadPDF";
import Proposal from "../components/jsPDF/Proposal";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header />
		<DownloadPDF>
			<Proposal
				title="Design &amp; Development Proposal"
				date="July 23, 2019"
			/>
		</DownloadPDF>
	</Layout >
);

export default IndexPage;
