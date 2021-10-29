import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import Experience from "../components/entry/experience"
import Awards from "../components/entry/awards"
import Education from "../components/entry/education"

const experience = [
  { name: "Front-End Web Developer", employer: <a href="https://www.workhuman.com" target="_blank" rel="noopener noreferrer">Workhuman <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: "currently mantaining and developing our wordpress website, actively looking for ways to learn, supporting my team by providing feedback to designs and flexing my own design muscle where I can, being utilized as an accessibility resource, and being a total powerhouse in terms of getting projects launched on a timely basis and producing high quality work", duration: "Sept 2020 – present", location: "Framingham, Massachusetts" },
  { name: "Front-End Web Developer", employer: <a href="https://www.membersfirst.com" target="_blank" rel="noopener noreferrer">Membersfirst <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: "developed websites from team designed mockups, creating efficiencies within our internal process to decrease amount of time needed for site development and productivity, maintaining CDN which covers over 340 websites, solving tickets through the JIRA bug tracking software, creating various products and offerings including digital signs, landing pages, and dining module templates, while also actively creating documentation for teammates", duration: "Jan 2018 – Sept 2020", location: "Wayland, Massachusetts" },
  { name: "Interactive Designer", employer: <a href="https://www.membersfirst.com" target="_blank" rel="noopener noreferrer">Membersfirst <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: "developed websites from mockups, creating mockups, giving design feedback to based on personal experience developing websites, and leading the responsive global email template project", duration: "May 2016 – Dec 2017", location: "Wayland, Massachusetts" },
  { name: "Design Intern", employer: <a href="https://www.membersfirst.com" target="_blank" rel="noopener noreferrer">Membersfirst <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: "provided support to design team with various projects include creating email templates, skinning mobile sites", duration: "Sep 2015 – May 2016", location: "Wayland, Massachusetts" },
  { name: "Web Developer & Administrative Intern", employer: <a href="https://www.mwrta.com" target="_blank" rel="noopener noreferrer"> Metrowest Regional Transit Authority <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: "designed a bus tracking interface used by the Metrowest region, developed and designed a high traffic website, and provided graphic design assistance", duration: "Jun 2014 – Sep 2015", location: "Framingham, Massachusetts" },
  { name: "Web Developer", employer: <a href="https://downtownframinghaminc.org/" target="_blank" rel="noopener noreferrer"> Framingham Downtown Renaissance <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: " used squarespace developer mode to create an easy to use website for a community involvment & re-development", duration: "Jan 2014 – Jun 2014", location: "Framingham, Massachusetts" },
  { name: "ITS Help Desk Associate", employer: <a href="https://www.framingham.edu/" target="_blank" rel="noopener noreferrer"> Framingham State University <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: " helped students, faculty, and staff with various technology assistance", duration: "Oct 2013 – Dec 2013", location: "Framingham, Massachusetts" },
  { name: "Web Developer", employer: <a href="https://www.wellesley.edu/" target="_blank" rel="noopener noreferrer"> Wellesley College <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>, description: " provided website assistance and asset creation to the human resources department at Wellesley College", duration: "Oct 2011 – Dec 2012", location: "Wellesley, Massachusetts" },
];

const education = [
  { name: "BS Computer Science and Information System", institution: "Framingham State University", duration: "2012 – 2016", research: "computer and information security through password protection, use of biometrics, and physical keys in terms of cost over a set period of time and ease of use" },
  { name: "High School Diploma", institution: "Natick High School", duration: "2009 – 2012", research:"web design and development programs, web & graphic design, and training for adobe certification" },
];

const awards = [
  { name: "Best In Class (Lifestyle) - Addison Reserve Country Club", date: "Aug 2019", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770294&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Best In Class (Lifestyle) - The Club at Ibis", date: "Aug 2019", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770308&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Best In Class (Lifestyle) - The Club at Renaissance", date: "Aug 2019", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770315&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Best In Class (Lifestyle) - Steel Club", date: "Aug 2019", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770322&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Best In Class (Lifestyle) - Colleton River Club", date: "Aug 2018", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767816&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Best In Class (Lifestyle) - Manchester Country Club", date: "Aug 2018", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767809&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Best In Class (Lifestyle) - The Silverleaf Club", date: "Aug 2018", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767830&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
  { name: "Outstanding Achievement (Restaurant) - Local 02045", date: "Aug 2018", issuer: "Interactive Media Awards", certificate: <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767823&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a> },
];

const SecondPage = () => (
  <Layout>
    <SEO title="Curriculum Vitae for Cameron Omiccioli-Akhmetova" />
    <h1>Cameron Omiccioli-Akhmetova</h1>

    <p className="mb-0">Front End Web Devloper | caomicc@gmail.com | Hudson, MA</p>
    <p>www.caomicc.com</p>

    <h2> 
    <Emoji
      symbol="👩🏻‍💻"
      label="skills"
    />
      &nbsp;Skills</h2>
    <p>HTML, CSS, SCSS, Twig, Javascript, jQuery, Node.JS, AJAX, Bootstrap, PHP, Wordpress, Git, WCAG, JIRA, Sketch, Abstract, Adobe Creative Suite, UI/UX, Graphic Design, Hubspot, Technical Writing, Leadership and Team Management, A/B Testing, Gatsby, Typography, Corporate Identity, Responsive Web Design</p>

    <h2><Emoji
      symbol="🖥"
      label="experience"
    /> &nbsp;Experience</h2>
    
    {experience.map(({ name, employer, description, duration, location }) => <Experience name={name} employer={employer} description={description} duration={duration} location={location}></Experience>)}

    <h2> <Emoji
      symbol="🎓"
      label="education"
    /> Education</h2>

    {education.map(({ name, institution, duration, research }) => <Education name={name} institution={institution} duration={duration} research={research}></Education>)}

    <h2><Emoji
      symbol="🏆"
      label="magic"
    /> Honors & Awards</h2>

    {awards.map(({ name, date, issuer, certificate }) => <Awards name={name} date={date} issuer={issuer} certificate={certificate}></Awards>)}

    <Link to="/" className="home-link">Home</Link>
  </Layout>
)

export default SecondPage
