import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../elements/button"

export default class IndexPage extends React.Component {
  render() {
    const siteTitle = "Six Feet Over"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `charity`,
            `fundraiser`,
            `home`,
            `mental health`,
            `nonprofit`,
            `six feet over`,
            `suicide prevention`,
          ]}
        />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>This website is currently being built for Six Feet Over.</p>
        <Link to="/blog/">
          <Button marginTop="35px">View News & Events</Button>
        </Link>
      </Layout>
    )
  }
}
