import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
       <h1>Learn to <br />design and code <br />React apps</h1>
       <p>Welcome to your new Gatsby site. This is the first React site I have ever build. Wish me luck!</p>
       <Link to="/page-2/">Watch the video please</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
