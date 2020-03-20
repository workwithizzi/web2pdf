import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const GET_PROPOSALS = graphql`
	query ProposalsListing {
		allMarkdownRemark {
			edges {
				node {
					excerpt
					frontmatter {
						slug
					}
				}
			}
		}
	}
`;

function ProposalsBlock() {
	const data = useStaticQuery(GET_PROPOSALS);
	return (
		<>
			<h1>Proposals</h1>
			{data.allMarkdownRemark.edges.map(edge => (
				<article key={edge.node.frontmatter.slug} style={{ border: "1px solid black" }}>
					<Link to={`/proposals${edge.node.frontmatter.slug}`}>
						<h2>{edge.node.frontmatter.title}</h2>
					</Link>
					<p>{edge.node.frontmatter.date}</p>
					<p>{edge.node.excerpt}</p>
					<Link to={`/proposals${edge.node.frontmatter.slug}`}>Read More</Link>
				</article>
			))}
		</>
	);
}

export default ProposalsBlock;
