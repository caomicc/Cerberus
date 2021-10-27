import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Emoji from "../components/emoji"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cameron Omiccioli-Akhmetova</h1>
    <p className="lead">
      Hi there! <Emoji
        symbol="👋🏻"
      label="wave"
      /> <br/>
      My name is Cameron && I'm a front end web developer from Hudson, MA.
    </p>
    <p>
      Currently I write code and make magic happen for <a href="https://www.workhuman.com" target="_blank" rel="noopener noreferrer">Workhuman</a> as a front end developer.
      I'm experienced in HTML, CSS/SCSS, twig, Node.js, Sketch, XD, JavaScript, and Wordpress with a overall focus on accessibility and WCAG.
      Feel free to <a href="mailto:caomicc@gmail.com">shoot me an email</a> if you're looking for help on a project.
    </p>
    <p>
      Often, I am described as a hard working, fast learning, and <em>"pixel perfect"</em>.
      I strive to make the integration between design and code fluid and seamless, including making sites cohesive in code and design while also keeping all audiences in mind.
    </p>
    <p>
      When I'm not working, I'm often hanging out with my pets, playing Animal Crossing, binging something tv show (currently: <i>American Dad!</i>), or doing some home project with my husband.
    </p>
    <h2>Links</h2>
    <Link to="/projects/">Recent Projects</Link><br/>
    <Link to="/resume/">Curriculum Vitae</Link><br/>
    <a href="mailto:caomicc@gmail.com">
      Email
    </a>
    <br/>
    <a href="https://www.linkedin.com/in/caomicc" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <br/>
    <a href="https://github.com/caomicc" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <br/>
    <a href="https://www.facebook.com/caomicc" target="_blank" rel="noopener noreferrer">
      Facebook
    </a>
  </Layout>
)

export default IndexPage
