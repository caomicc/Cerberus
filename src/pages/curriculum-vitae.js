import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

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

    <div className="entry">
      <div className="job">
        <h3>Front-End Web Developer</h3>
        <div className="indent">
          <p>
            <span className="title_attr">employer</span> <a href="https://workhuman.com" target="_blank" rel="noopener noreferrer">Workhuman <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>
          </p>
          <p>
            <span className="title_attr">description</span> currently mantaining and developing our wordpress website, actively looking for ways to learn, supporting my team by providing feedback to designs and flexing my own design muscle where I can, being utilized as an accessibility resource, and being a total powerhouse in terms of getting projects launched on a timely basis and producing high quality work
          </p>
          <p>
            <span className="title_attr">duration</span> Sept 2020 – present
          </p>
          <p>
            <span className="title_attr">location</span> Framingham, Massachusetts
          </p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Front-End Web Developer</h3>
        <div className="indent">
          <p>
            <span className="title_attr">employer</span> <a href="https://membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a>
          </p>
          <p>
          <span className="title_attr">description</span> developed websites from team designed mockups, creating efficiencies within our internal process to decrease amount of time needed for site development and productivity, maintaining CDN which covers over 340 websites, solving tickets through the JIRA bug tracking software, creating various products and offerings including digital signs, landing pages, and dining module templates, while also actively creating documentation for teammates
          </p>
          <p>
          <span className="title_attr">duration</span> Jan 2018 – Sept 2020
          </p>
          <p>
          <span className="title_attr">location</span> Wayland, Massachusetts
          </p>
        </div>
      </div>
    </div>

    <div className="entry">
       <div className="job">
         <h3>Interactive Designer</h3>
         <div className="indent">
           <p><span className="title_attr">employer</span> <a href="https://membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
           <p><span className="title_attr">description</span> developed websites from mockups, creating mockups, giving design feedback to based on personal experience developing websites, and leading the responsive global email template project</p>
           <p><span className="title_attr">duration</span> May 2016 – Dec 2017</p>
           <p><span className="title_attr">location</span> Wayland, Massachusetts</p>
         </div>
       </div>
     </div>
     <div className="entry">
       <div className="job">
         <h3>Design Intern</h3>
         <div className="indent">
           <p><span className="title_attr">employer</span> <a href="https://membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
           <p><span className="title_attr">description</span> provided support to design team with various projects include creating email templates, skinning mobile sites</p>
           <p><span className="title_attr">duration</span> Sep 2015 – May 2016</p>
           <p><span className="title_attr">location</span> Wayland, Massachusetts</p>
         </div>
       </div>
     </div>
     <div className="entry">
       <div className="job">
         <h3>Web Developer & Administrative Intern</h3>
         <div className="indent">
           <p><span className="title_attr">employer</span> <a href="http://mwrta.com/" target="_blank" rel="noopener noreferrer">Metrowest Regional Transit Authority <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
           <p><span className="title_attr">description</span> designed a bus tracking interface used by the Metrowest region, developed and designed a high traffic website, and provided graphic design assistance</p>
           <p><span className="title_attr">duration</span> Jun 2014 – Sep 2015</p>
           <p><span className="title_attr">location</span> Framingham, Massachusetts</p>
         </div>
       </div>
     </div>
     <div className="entry">
       <div className="job">
         <h3>Web Developer & Designer</h3>
         <div className="indent">
           <p><span className="title_attr">employer</span> <a href="https://downtownframinghaminc.org/" target="_blank" rel="noopener noreferrer">Framingham Downtown Renaissance <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
           <p><span className="title_attr">description</span> used squarespace developer mode to create an easy to use website for a community involvment & re-development</p>
           <p><span className="title_attr">duration</span> Jan 2014 – Jun 2014</p>
           <p><span className="title_attr">location</span> Framingham, Massachusetts</p>
         </div>
       </div>
     </div>
     <div className="entry">
       <div className="job">
         <h3>ITS Help Desk Associate</h3>
         <div className="indent">
           <p><span className="title_attr">employer</span> <a href="https://www.framingham.edu/" target="_blank" rel="noopener noreferrer">Framingham State University <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
           <p><span className="title_attr">description</span> helped students, faculty, and staff with various technology assistance</p>
           <p><span className="title_attr">duration</span> Oct 2013 – Dec 2013</p>
           <p><span className="title_attr">location</span> Framingham, Massachusetts</p>
         </div>
       </div>
     </div>
     <div className="entry">
       <div className="job">
         <h3>Web Designer</h3>
         <div className="indent">
           <p><span className="title_attr">employer</span> <a href="https://wellesley.edu" target="_blank" rel="noopener noreferrer">Wellesley College <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
           <p><span className="title_attr">description</span> provided website assistance and asset creation to the human resources department at Wellesley College</p>
           <p><span className="title_attr">duration</span> Oct 2011 – Dec 2012</p>
           <p><span className="title_attr">location</span> Wellesley, Massachusetts</p>
         </div>
       </div>
     </div>

    <h2> <Emoji
      symbol="🎓"
      label="education"
    /> Education</h2>
    <div className="entry">
      <div className="job">
        <h3>BS Computer Science and Information System</h3>
        <div className="indent">
          <p><span className="title_attr">institution</span> Framingham State University</p>
          <p><span className="title_attr">years attended</span> 2012 – 2016</p>
          <p><span className="title_attr">research study</span> computer and information security through password protection, use of biometrics, and physical keys in terms of cost over a set period of time and ease of use</p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>High School Diploma</h3>
        <div className="indent">
          <p><span className="title_attr">institution</span> Natick High School</p>
          <p><span className="title_attr">years attended</span> 2009 – 2012</p>
          <p><span className="title_attr">research study</span> web design and development programs, web & graphic design, and training for adobe certification</p>
        </div>
      </div>
    </div>


    <h2><Emoji
      symbol="🏆"
      label="magic"
    /> Honors & Awards</h2>
    <div className="entry">
      <div className="job">
        <h3>Best In Class (Lifestyle) - Addison Reserve Country Club</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2019</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770294&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Best In Class (Lifestyle) - The Club at Ibis</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2019</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770308&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Best In Class (Lifestyle) - The Club at Renaissance</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2019</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770315&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Outstanding Achievement (Lifestyle) - Steel Club</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2019</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=770322&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Best In Class (Lifestyle) - Colleton River Club</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2018</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767816&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Best In Class (Lifestyle) - Manchester Country Club</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2018</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767809&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Best In Class (Lifestyle) - The Silverleaf Club</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2018</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767830&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>

    <div className="entry">
      <div className="job">
        <h3>Outstanding Achievement (Restaurant) - Local 02045</h3>
        <div className="indent">
          <p><span className="title_attr">issue date</span> Aug 2018</p>
          <p><span className="title_attr">issuer</span> Interactive Media Awards</p>
          <p><span className="title_attr">certificate</span> <a href="https://www.interactivemediaawards.com/winners/certificate.asp?param=767823&cat=1" target="_blank" rel="noopener noreferrer">view certificate <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></p>
        </div>
      </div>
    </div>


    <Link to="/" className="home-link">Home</Link>
  </Layout>
)

export default SecondPage
