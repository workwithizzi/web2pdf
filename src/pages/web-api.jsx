import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Proposal from "../components/jsPDF/Proposal";

const WebAPIPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header />
		<Proposal
			title="Design &amp; Development Proposal"
			date="July 23, 2019"
		/>
		<button onClick={() => { window.print(); }}>Save via Web API</button>
	</Layout >
);

export default WebAPIPage;
