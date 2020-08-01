import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Emoji from "../components/emoji"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cameron Omiccioli</h1>
    <p className="lead">
      Hi There! <Emoji
      symbol="&#x1F44B;"
      label="wave"
      /> <br/>
      My name is Cameron && I'm a front-end developer from Holliston, MA.
    </p>
    <p>
      Currently I write code for <a href="https://www.membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst</a> as their front-end developer. I'm experienced in HTML, CSS/SCSS, Node.js, Sketch, JavaScript, with a focus on accessibility.
      Feel free to <a href="mailto:caomicc@gmail.com">shoot me an email</a>.
    </p>
    <p>
      Often, I am described as a hard working, fast learning, and <em>"pixel perfect"</em>.
      I strive to make the integration between design and code fluid and seamless, while also keeping all audiences in mind. 
    </p>
    <p>
      When I'm not working, I'm often hanging out with my pet chinchilla Simon, playing the newest Animal Crossing, binging something tv show (currently: <i>American Dad!</i>), doing some home project.
    </p>
    {
    // <h2>Recent Projects</h2>
    // <Link to="/waverley/">Waverley Country Club</Link><br/>
    // <Link to="/uclubboston/">The University Club of Boston</Link><br/>
    // <Link to="/addison/">Addison Reserve Country Club</Link><br/>
    // <Link to="/ibis/">The Club at Ibis</Link><br/>
    // <Link to="/colleton/">Colleton River Club</Link><br/>
    // <Link to="/manchester/">Manchester Country Club</Link><br/>
    }

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
