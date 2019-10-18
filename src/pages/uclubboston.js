import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="The University Club of Boston" />
    <h1>The University Club of Boston</h1>
    <p>Welcome to page 2</p>


    
    <Link to="/">Take me back!</Link>
  </Layout>
)

export default SecondPage
