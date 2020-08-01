/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHeart, faCannabis, faMagic  } from '@fortawesome/free-solid-svg-icons'



// import Header from "./header"
import Emoji from "./emoji"
import "./layout.css"
import "./custom.scss"

// library.add(faHeart, faCannabis, faMagic)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 700,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} by yours truly. <br/>
          Built with
          {` `}
          <Emoji
          symbol="&#x1F5A4;"
          label="love"
          />,
          <Emoji
          symbol="&#x1F34D;"
          label="weed"
          />, and &nbsp;
          <Emoji
          symbol="&#x2728;"
          label="magic"
          />.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
