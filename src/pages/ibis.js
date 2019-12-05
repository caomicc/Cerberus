import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="The Club at Ibis" />
    <h1>The Club at Ibis</h1>
    <div class="entry">
      <div class="project">
        <div class="">
          <p>
            <span class="title_attr">role</span> lead developer
          </p>
          <p>
            <span class="title_attr">url</span> <a href="http://www.clubatibis.com/" target="_blank" rel="noopener noreferrer" title="The Club at Ibis">http://www.clubatibis.com/</a>
          </p>
          <p>
            <span class="title_attr">developer tools</span> Git, Sketch, Atom, Bootstrap
          </p>
          <p>
            <span class="title_attr">award</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770308&cat=1" rel="noopener noreferrer" target="_blank">IMA Best in Class - Lifestyle<i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span>
          </a>
          </p>
          <p>
            <span class="title_attr">designed by</span> <a href="https://www.linkedin.com/in/laurenvachon" target="_blank" rel="noopener noreferrer" title="Link to Lauren Vachon's LinkedIn">Lauren Vachon</a> @ MembersFirst
          </p>
        </div>
      </div>
    </div>
    <h2>Brief</h2>
    <p>New client to MembersFirst requested a soothing site that represented the club atmosphere. The goal of the design, completed by the MembersFirst design team, was to convey a "nice, open, and airy" feeling to both current and prospective members.

Site used multiple plugins including ScrollMagic and fullpage.js.</p>

    <img src="https://caomicc.github.io/images/ibis.jpg" className="mt-1 mb-0"/>

    <h2>Role</h2>
    <p>My role during this project included providing design critique, developing website from sketch mockups && custom built templates, solving QA issues, implementing into propriatary CMS and creating an interactive expierience across multiple devices.
    </p>

    <h2>Developer Tools</h2>
    <p>During this project, we used git version control through BitBucket. Mockups were created with sketch and site was developed using Atom, CSS/SCSS, JavaScript, jQuery, and a propriatary CMS. The framework this site used is a custom version of Bootstrap that is used across all MembersFirst responsive sites.</p>

    <Link to="/" className="home-link">Home</Link>
  </Layout>
)

export default SecondPage
