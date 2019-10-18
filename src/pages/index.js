import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Emoji from "../components/emoji"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cameron Omiccioli</h1>
    <p className="lead">
      Hi There! <Emoji
      symbol="&#x1F44B;"
      label="love"
      /> <br/>
      I'm Cameron and I'm a front-end developer from Holliston, MA.
    </p>
    <p>
      Lately, I've been writing code for <a href="https://www.membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst</a> as their front-end developer.
      I'm experienced in HTML, CSS/SCSS, Node, Sketch, JavaScript, with a focus on accesibility.
      </p>
      <p>
      Often, I am described as a hard working, fast learning, and <i>"pixel perfect"</i>.
      I strive to make the integration between design and code fluid and seamless, while also keeping all audiences in mind.
    </p>
    <p>
      When I'm not working, I'm often hanging out with my pet chinchilla Simon, binging a show on Netflix, or enjoying a brew with my friends.
    </p>


    <h2>Recent Projects</h2>
    <Link to="/waverley/">Waverly Country Club</Link><br/>
    <Link to="/uclubboston/">The University Club of Boston</Link><br/>
    <Link to="/addison/">Addison Reserve Country Club</Link><br/>
    <Link to="/ibis/">Country Club of Ibis</Link><br/>


    <h2>Links</h2>
    <a href="mailto:caomicc@gmail.com">
      Email
    </a>
    <br/>
    <a href="https://www.linkedin.com/in/caomicc" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <br/>
    <a href="https://github.com/caomicc" target="_blank" rel="noopener noreferrer">
      Github
    </a>
    <br/>
    <a href="https://www.facebook.com/caomicc" target="_blank" rel="noopener noreferrer">
      Facebook
    </a>
  </Layout>
)

export default IndexPage
