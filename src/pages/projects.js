import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Recent Projects*</h1>
    <p><i>*and favorites ones, too.</i></p>
      <div class="entry">
        <div class="job">
          <h3>Belmont Country Club</h3>
          <div class="indent">
            <p><span class="title_attr">url</span> <a href="https://www.belmontcc.org/" target="_blank" rel="noopener noreferrer"> https://www.belmontcc.org/</a></p>
            <p><span class="title_attr">project date</span> Apr 2020</p>
            <p><span class="title_attr">role</span> lead developer</p>
          </div>
        </div>
      </div>

    <div class="entry">
      <div class="job">
        <h3>The Quarry Golf Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.quarrygolfnaples.com/" target="_blank" rel="noopener noreferrer"> https://www.quarrygolfnaples.com/</a></p>
          <p><span class="title_attr">project date</span> Feb 2020</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>San Jose Country Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.sjccjax.com/" target="_blank" rel="noopener noreferrer"> https://www.sjccjax.com/</a></p>
          <p><span class="title_attr">project date</span> Feb 2020</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Bear Lakes Country Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.bearlakes.org/" target="_blank" rel="noopener noreferrer"> https://www.bearlakes.org/</a></p>
          <p><span class="title_attr">project date</span> Jan 2020</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Stonebridge Country Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.stonebridgecountryclub.com/" target="_blank" rel="noopener noreferrer"> https://www.stonebridgecountryclub.com/</a></p>
          <p><span class="title_attr">project date</span> Dec 2019</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Ocean Village</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.oceanvillage.com/" target="_blank" rel="noopener noreferrer"> https://www.oceanvillage.com/</a></p>
          <p><span class="title_attr">project date</span> Nov 2019</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Waverly Country Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.waverley.cc/" target="_blank" rel="noopener noreferrer"> https://www.waverley.cc/</a></p>
          <p><span class="title_attr">project date</span> Sept 2019</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Addison Reserve</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.addisonreserve.cc/" target="_blank" rel="noopener noreferrer"> https://www.addisonreserve.cc/</a></p>
          <p><span class="title_attr">project date</span> Sept 2018</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Club at Ibis</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.clubatibis.com/" target="_blank" rel="noopener noreferrer"> https://www.clubatibis.com/</a></p>
          <p><span class="title_attr">project date</span> Jan 2018</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Silverleaf Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.silverleafclub.com/" target="_blank" rel="noopener noreferrer"> https://www.silverleafclub.com/</a></p>
          <p><span class="title_attr">project date</span> October 2017</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <div class="entry">
      <div class="job">
        <h3>Manchester Country Club</h3>
        <div class="indent">
          <p><span class="title_attr">url</span> <a href="https://www.manchestercountryclub.com/" target="_blank" rel="noopener noreferrer"> https://www.manchestercountryclub.com/</a></p>
          <p><span class="title_attr">project date</span> June 2017</p>
          <p><span class="title_attr">role</span> lead developer</p>
        </div>
      </div>
    </div>

    <Link to="/" className="home-link">Home</Link>
  </Layout>
)

export default SecondPage
