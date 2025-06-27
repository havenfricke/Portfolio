import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";


function HomePage() 
{
  useEffect(() => {
    
  }, []) // Variables in array will "React", run useEffect then, update webpage.

  return (
    <section className="home-page">
      <div className="home-profile-img"></div>
      <div className="home-banner">
        <h1>Haven Fricke</h1>
        <hr />
        <h3>Interactive Software Developer</h3><br /> 
        <h3 className="home-icons">
          <a href="https://www.linkedin.com/in/haven-fricke/" target="_blank"><img className="linkedin" src="/Portfolio/linkedin-brands.svg" title="open in new tab"/></a>
          <a href="mailto:havenfricke@u.boisestate.edu" target="_blank"><img className="email" src="/Portfolio/envelope-solid.svg" title="open email"/></a>
           {/* <a href="https://app.joinhandshake.com/profiles/w975ep" target="_blank"><img className="linkedin" src="/Portfolio/handshake.svg" title="open in new tab"/></a> */}
        </h3>
      </div>
      <div className="home-content">
        <div className="info-card">
          <p>
            I am a software developer specializing in interactive applications. <br /><br />
            My Ikigai is driven by a tactical perception of communication technologies, an intuition in design, and many years of working with computers. <br /><br />
            Computing as a means to communicate ideas to people using organized, accessible information is a tactical and technological approach 
            to business success. Business driven applications support public access directly to products and services. Additionally organize a business
            for structured internal processes.<br /><br />
            My past experience as a tactical communicator plays heavily into my software development when it comes to innovating new technologies. <br /><br />
            Using computers for a progamatically creative purpose such as game development is a newly introduced practice into my life but it extends connecting people with ideas.<br /><br />
            <br /> 
          </p>
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage);