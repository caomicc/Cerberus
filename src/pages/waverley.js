import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Waverley Country Club" />
    <h1>Waverley Country Club</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Take me back!</Link>
  </Layout>
)

export default SecondPage
