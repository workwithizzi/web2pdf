import path from "path";
import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../Layout";

// Get data from the '.md' file
export const query = graphql`
	query PostListQuery($slug: String!, $name: String!) {
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
		allFile(filter: {name: {eq: $name}}) {
			nodes {
				absolutePath
				relativePath
			}
		}
	}
`;

function ProposalTemplate({ data }) {
	const { markdownRemark, allFile } = data;
	const slug = markdownRemark.frontmatter.slug.split("/")[1];

	// relative path
	const path = allFile.nodes[0].relativePath;
	const file = require("../../templates/" + path);

	// absolute path
	// const path2 = allFile.nodes[0].absolutePath;
	// require doesn't accept the path as a variable
	// const file2 = require(path2);
	// require accepts absolute path as a static string
	// const file2 = require("/Users/IvTs/Work/IZZI/Cookbook/web2pdf/src/templates/proposal2/proposal2.pdf");

	return (
		<Layout>
			<Link style={{ display: "block" }} to={`/md-to-pdf`}>Back</Link>
			<div dangerouslySetInnerHTML={{
				__html: markdownRemark.html,
			}} />
			{/* Download by relative path */}
			<a href={file} download={`${slug}.pdf`}>Download</a>
			{/* Absolute Path
				<a href={file2} download={`${slug}.pdf`}>Download</a>
			*/}
			<Link style={{ display: "block" }} to={`/md-to-pdf`}>Back</Link>
		</Layout>
	);
}

export default ProposalTemplate;
