import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Coming Soon" />
    <div className="holder">
      <StaticImage src="../images/4poker-d.png" alt="4 Poker Coming Soon" className="desk"/>
      <StaticImage src="../images/4poker-t.png" alt="4 Poker Coming Soon" className="tablet"/>
      <StaticImage src="../images/4poker-p.png" alt="4 Poker Coming Soon" className="phablet"/>
      <StaticImage src="../images/4poker-m.png" alt="4 Poker Coming Soon" className="mobile"/>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Coming Soon" />

export default IndexPage
