import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
    <button onClick={() => { window.print() }}>Save via Browser API</button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout >
)

export default IndexPage
