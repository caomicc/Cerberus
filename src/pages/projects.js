import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/entry/row"

const entries = [
  { name: "Workhuman Careers", href: "https://www.workhuman.com/company/careers/", projectDate: "Sept 2021", role: "lead developer" },
  { name: "Belmont Country Club", href: "https://www.belmontcc.org/", projectDate: "Apr 2020", role: "lead developer" },
  { name: "The Quarry Golf Club", href: "https://www.quarrygolfnaples.com/", projectDate: "Feb 2020", role: "lead developer" },
  { name: "San Jose Country Club", href: "https://www.sjccjax.com/", projectDate: "Feb 2020", role: "lead developer" },
  { name: "Bear Lakes Country Club", href: "https://www.bearlakes.org/", projectDate: "Jan 2020", role: "lead developer" },
  { name: "Stonebridge Country Club", href: "https://www.stonebridgecountryclub.com/", projectDate: "Dec 2019", role: "lead developer" },
  { name: "Ocean Village", href: "https://www.oceanvillage.com/", projectDate: "Nov 2019", role: "lead developer" },
  { name: "Waverly Country Club", href: "https://www.waverley.cc/", projectDate: "Sept 2019", role: "lead developer" },
  { name: "Addison Reserve", href: "https://www.waverley.cc/", projectDate: "Sept 2018", role: "lead developer" },
  { name: "Club at Ibis", href: "https://www.clubatibis.com/", projectDate: "Jan 2018", role: "lead developer" },
  { name: "Silverleaf Club", href: "https://www.silverleafclub.com/", projectDate: "Oct 2017", role: "lead developer" },
  { name: "Manchester Country Club", href: "https://www.manchestercountryclub.com/", projectDate: "Jun 2017", role: "lead developer" },
];

const Entry = ({name, href, projectDate, role}) => {
  return (
    <div className="entry">
      <div className="job">
        <h3>{name}</h3>
        <div className="indent">
          <Row label="url"><a href={href} target="_blank" rel="noopener noreferrer">{href}</a></Row>
          <Row label="project date">{projectDate}</Row>
          <Row label="role">{role}</Row>
        </div>
      </div>
    </div>
  )
}

const SecondPage = () => {
  return (
  <Layout>
    <SEO title="Projects" />
    <h1>Recent Projects*</h1>
    <p><i>*and favorites ones, too.</i></p>

    {entries.map(({ name, href, projectDate, role }) => <Entry name={name} href={href} projectDate={projectDate} role={role}></Entry> )}

    <Link to="/" className="home-link">Home</Link>
  </Layout>
)}

export default SecondPage
