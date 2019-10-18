import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Curriculum Vitae" />
    <h1>Curriculum Vitae</h1>

    <h2>Skills</h2>
    <p>HTML, CSS/SCSS, JavaScript, jQuery, Bootstrap 3 & 4, Git, Sketch, Photoshop, Illustrator, Node, and Gatsby.</p>

    <h2>Relevant Experience</h2>
    <div class="entry">
      <div class="job">
        <h3>Front-End Web Developer</h3>
        <div class="indent">
          <p>
            <span class="title_attr">employer</span> <a href="https://membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>
          </p>
          <p>
          <span class="title_attr">description</span> develop websites from mockups, creating efficiencies within our internal process to decrease amount of time needed for site development and productivity, maintenance of CDN which covers over 340 websites, and solving tickets through the JIRA bug tracking software
          </p>
          <p>
          <span class="title_attr">duration</span> Jan 2018 – present
          </p>
          <p>
          <span class="title_attr">location</span> Wayland, Massachusetts
          </p>
        </div>
      </div>
    </div>

    <div class="entry">
       <div class="job">
         <h3>Interactive Designer</h3>
         <div class="indent">
           <p><span class="title_attr">employer</span> <a href="https://membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
           <p><span class="title_attr">description</span> develop websites from mockups, creating mockups, giving design feedback to based on personal experience developing websites, and leading the responsive global email template project</p>
           <p><span class="title_attr">duration</span> May 2016 – Dec 2017</p>
           <p><span class="title_attr">location</span> Wayland, Massachusetts</p>
         </div>
       </div>
     </div>
     <div class="entry">
       <div class="job">
         <h3>Design Intern</h3>
         <div class="indent">
           <p><span class="title_attr">employer</span> <a href="https://membersfirst.com" target="_blank" rel="noopener noreferrer">MembersFirst <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
           <p><span class="title_attr">description</span> provided support to design team with various projects include creating email templates, skinning mobile sites</p>
           <p><span class="title_attr">duration</span> Sep 2015 – May 2016</p>
           <p><span class="title_attr">location</span> Wayland, Massachusetts</p>
         </div>
       </div>
     </div>
     <div class="entry">
       <div class="job">
         <h3>Web Developer & Administrative Intern</h3>
         <div class="indent">
           <p><span class="title_attr">employer</span> <a href="http://mwrta.com/" target="_blank" rel="noopener noreferrer">Metrowest Regional Transit Authority <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
           <p><span class="title_attr">description</span> designed a bus tracking interface used by the Metrowest region, developed and designed a high traffic website, and graphic design</p>
           <p><span class="title_attr">duration</span> Jun 2014 – Sep 2015</p>
           <p><span class="title_attr">location</span> Framingham, Massachusetts</p>
         </div>
       </div>
     </div>
     <div class="entry">
       <div class="job">
         <h3>Web Developer & Designer</h3>
         <div class="indent">
           <p><span class="title_attr">employer</span> <a href="https://downtownframinghaminc.org/" target="_blank" rel="noopener noreferrer">Framingham Downtown Renaissance <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
           <p><span class="title_attr">description</span> used squarespace developer mode to create an easy to use website for a community involvment</p>
           <p><span class="title_attr">duration</span> Jan 2014 – Jun 2014</p>
           <p><span class="title_attr">location</span> Framingham, Massachusetts</p>
         </div>
       </div>
     </div>
     <div class="entry">
       <div class="job">
         <h3>ITS Help Desk Associate</h3>
         <div class="indent">
           <p><span class="title_attr">employer</span> <a href="https://www.framingham.edu/" target="_blank" rel="noopener noreferrer">Framingham State University <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
           <p><span class="title_attr">description</span> helped students, faculty, and staff with various technology assistance</p>
           <p><span class="title_attr">duration</span> Oct 2013 – Dec 2013</p>
           <p><span class="title_attr">location</span> Framingham, Massachusetts</p>
         </div>
       </div>
     </div>
     <div class="entry">
       <div class="job">
         <h3>Web Designer</h3>
         <div class="indent">
           <p><span class="title_attr">employer</span> <a href="https://wellesley.edu" target="_blank" rel="noopener noreferrer">Wellesley College <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
           <p><span class="title_attr">description</span> provided website assistance and asset creation to the human resources department at Wellesley College</p>
           <p><span class="title_attr">duration</span> Oct 2011 – Dec 2012</p>
           <p><span class="title_attr">location</span> Wellesley, Massachusetts</p>
         </div>
       </div>
     </div>

    <h2>Education</h2>
    <div class="entry">
      <div class="job">
        <h3>BS Computer Science and Information System</h3>
        <div class="indent">
          <p><span class="title_attr">institution</span> Framingham State University</p>
          <p><span class="title_attr">years attended</span> 2012 – 2016</p>
          <p><span class="title_attr">research study</span> computer and information security through password protection, use of biometrics, and physical keys in terms of cost and ease of use.</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>High School Diploma</h3>
        <div class="indent">
          <p><span class="title_attr">institution</span> Natick High School</p>
          <p><span class="title_attr">years attended</span> 2009 – 2012</p>
          <p><span class="title_attr">research study</span> web design and development programs, web & graphic design, and training for adobe certification</p>
        </div>
      </div>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
