import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import DownloadPDF from "../components/DownloadPDF";
import Proposal from "../components/Proposal";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<DownloadPDF>
			<Proposal
				title="Design &amp; Development Proposal"
				date="July 23, 2019"
			/>
		</DownloadPDF>
		<button onClick={() => { window.print(); }}>Save via Browser API</button>
	</Layout >
);

export default IndexPage;
