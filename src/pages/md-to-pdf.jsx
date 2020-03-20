import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import ProposalsBlock from "../components/md-to-pdf/ProposalsBlock";

const MdToPdfPage = () => {

	return (
		<Layout>
			<SEO title="Home" />
			<Header />
			<ProposalsBlock />
		</Layout>
	);
};

export default MdToPdfPage;
