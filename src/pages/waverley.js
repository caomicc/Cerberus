import React from "react"
import { Link } from "gatsby"

import portfolioImgURL from "../images/waverley.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Waverley Country Club" />
    <h1>Waverley Country Club</h1>
    <div class="entry">
      <div class="project">
        <div class="">
          <p>
            <span class="title_attr">role</span> lead developer
          </p>
          <p>
            <span class="title_attr">url</span> <a href="https://www.waverley.cc/" target="_blank" rel="noopener noreferrer" title="Link to Waverley Country Club">https://www.waverley.cc/</a>
          </p>
          <p>
            <span class="title_attr">developer tools</span> Git, Sketch, Atom, Bootstrap
          </p>
        </div>
      </div>
    </div>
    <h2>Brief</h2>
    <p>Coming Soon...</p>

    <img src={portfolioImgURL} className="mt-1 mb-0"/>

    <h2>Role</h2>
    <p>Coming Soon...</p>

    <h2>Developer Tools</h2>
    <p>Coming Soon...</p>

    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
