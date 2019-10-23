import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Manchester Country Club" />
    <h1>Manchester Country Club</h1>
    <div class="entry">
      <div class="project">
        <div class="">
          <p>
            <span class="title_attr">role</span> lead developer
          </p>
          <p>
            <span class="title_attr">url</span> <a href="http://www.manchestercountryclub.com" target="_blank" rel="noopener noreferrer" title="Link to Neptune Cove">http://www.manchestercountryclub.com</a>
          </p>
          <p>
            <span class="title_attr">developer tools</span> Git, Sketch, Atom, Bootstrap
          </p>
          <p>
            <span class="title_attr">award</span> <a href="http://interactivemediaawards.com/winners/certificate.asp?param=767809&cat=1" target="_blank" rel="noopener noreferrer">IMA Best in Class - Lifestyle <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span>
          </a>
          </p>
        </div>
      </div>
    </div>
    <h2>Brief</h2>
    <p>Manchester Country Club was looking to transform their website into being responsive and a more current feel. Site used multiple plugins including Slick Slider and Instafeed.</p>

    <img src="https://caomicc.github.io/images/manchester.jpg" className="mt-1 mb-0"/>

    <h2>Role</h2>
    <p>My role during this project included providing design critique, developing website from sketch mockups && custom built templates, solving QA issues, implementing into propriatary CMS and creating an interactive expierience across multiple devices. This site had a total of six custom pages and an advanced private side template.
    </p>

    <h2>Developer Tools</h2>
    <p>During this project, we used git version control through BitBucket. Mockups were created with sketch and site was developed using Atom, CSS/SCSS, JavaScript, jQuery, and a propriatary CMS. The framework this site used is a custom version of Bootstrap that is used across all MembersFirst responsive sites.</p>

    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
