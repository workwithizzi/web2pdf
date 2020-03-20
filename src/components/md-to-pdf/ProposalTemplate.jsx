import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../Layout";
import downloadFile from "../../templates/proposal1/proposal.pdf";

// Get data from the '.md' file
export const query = graphql`
	query PostListQuery($slug: String!) {
		markdownRemark(frontmatter: {
			slug: {
				eq: $slug
			}
		}) {
			html
			frontmatter {
				slug
			}
		}
	}
`;

export default function ProposalTemplate({ data }) {
	const { markdownRemark } = data;

	return (
		<Layout>
			<Link style={{ display: "block" }} to={`/md-to-pdf`}>Back</Link>
			<div dangerouslySetInnerHTML={{
				__html: markdownRemark.html,
			}} />
			<a href={downloadFile} download="Proposal1.pdf">Download</a>
			<Link style={{ display: "block" }} to={`/md-to-pdf`}>Back</Link>
		</Layout>
	);
}
