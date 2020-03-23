/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

// Create proposal templates based on .md files in 'src/templates/proposalName'
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {

		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								slug
							}
						}
					}
				}
			}
		`).then(results => {

			results.data.allMarkdownRemark.edges.forEach(({node}) => {
				createPage({
					path: `/proposals${node.frontmatter.slug}`,
					component: path.resolve(`./src/components/md-to-pdf/ProposalTemplate.jsx`),
					context: {
						slug: node.frontmatter.slug,
						name: node.frontmatter.slug.split("/")[1],
					},
				});
			});
			resolve();

		});
	});
}
;
