import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Colleton River Club" />
    <h1>Colleton River Club</h1>
    <div class="entry">
      <div class="project">
        <div class="">
          <p>
            <span class="title_attr">role</span> lead developer
          </p>
          <p>
            <span class="title_attr">url</span> <a href="https://www.colletonriverclub.com/" target="_blank" title="Link to Colleton River Club">https://www.colletonriverclub.com/</a>
          </p>
          <p>
            <span class="title_attr">developer tools</span> Git, Sketch, Atom, Bootstrap
          </p>
          <p>
            <span class="title_attr">award</span> <a href="http://interactivemediaawards.com/winners/certificate.asp?param=767816&cat=1" target="_blank">IMA Best in Class - Lifestyle <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>
          </p>
        </div>
      </div>
    </div>
    <h2>Brief</h2>
    <p>Colleton River Club underwent a branding overhaul and came to MembersFirst for a redesign. They wanted a site to portray the elegance of the property and their award-winning golf courses.</p>

    <img src="https://caomicc.github.io/images/colleton.jpg" className="mt-1 mb-0"/>

    <h2>Role</h2>
    <p>My role during this project included providing design critique, developing website from sketch mockups && custom built templates, solving QA issues, implementing into propriatary CMS and creating an interactive expierience across multiple devices.
    </p>

    <h2>Developer Tools</h2>
    <p>During this project, we used git version control through BitBucket. Mockups were created with sketch and site was developed using Atom, CSS/SCSS, JavaScript, jQuery, and a propriatary CMS. The framework this site used is a custom version of Bootstrap that is used across all MembersFirst responsive sites.</p>

    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
