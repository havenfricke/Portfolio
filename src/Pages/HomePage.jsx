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
        <h2>Software, Games, Interactive Media, and Mobile</h2><br /> 
        <h3 className="home-icons">
          <a href="https://www.linkedin.com/in/haven-fricke/" target="_blank"><img className="linkedin" src="/Portfolio/linkedin-brands.svg" title="open in new tab"/></a>
          <a href="https://x.com/havenf_gg" target="_blank"><img className="x-twitter" src="/Portfolio/x-twitter.svg" title="open in new tab"/></a>
          <a href="mailto:havenfricke@u.boisestate.edu" target="_blank"><img className="email" src="/Portfolio/envelope-solid.svg" title="open email"/></a>
        </h3>
      </div>
      <div className="home-content">
        <div className="info-card">
          <a href="/Portfolio/Haven_Fricke_Resume.pdf" target="_blank">View my résumé &#128279;</a>
          <p>
            Thank you for being here. My name is Haven Fricke, and I am a software developer, game developer, 
            and interactive media creator with a passion for building meaningful, engaging experiences. 
            Composition has always been central to my life. For many years, music and sound design were 
            my primary creative outlets. While that passion remains, I ultimately discovered that technology 
            is the medium through which I best express ideas and bring concepts to life.
            <br /><br />
            My ikigai lies at the intersection of composition, communication technologies, intuitive design, 
            and the technical expertise developed through years of working with computing systems. I view 
            computing as a powerful vehicle for communicating ideas and delivering utility through organized, 
            accessible information—a strategic and technological approach to problem‑solving that defines my work.
            <br /><br />
            Music theory offers a structured language of patterns and relationships. Software development mirrors 
            this: both rely on systems of organization to create functional, elegant solutions. Melodic patterns 
            and harmonies parallel algorithms and data structures; dissonance emerges when a chord falls out of 
            key just as it does when a function is misaligned with its intended purpose. In both disciplines, 
            refinement leads to clarity. My process is grounded in understanding systems, structure, and group 
            dynamics—whether collaborating with developers, artists, or engineers.
            <br /><br />
            My background as a tactical communicator in the United States Marine Corps significantly shapes my 
            approach to engineering and innovation. Operating under pressure, overcoming mental barriers, and 
            maintaining focus have become core strengths that inform my problem‑solving and project management 
            style. I aim to build solutions with longevity—architectures and designs that endure—supported by a 
            disciplined mindset that fosters creativity and effective execution.
            <br /><br />
            If language represents the masculine aspect of communication, then visual and auditory expression 
            represent the feminine. Both are essential for conveying ideas and emotion fully. I strive to balance 
            these dimensions in my work, creating experiences that are not only functional but also engaging, 
            expressive, and meaningful.
            <br /><br />
          </p>
        </div>
        <div className="info-card">
          <h3>Reading List</h3>
          <div className="row">
            <div className="col-2-grid">
              <img className="book" alt="understandingmedia" src="/Portfolio/understandingmedia.jpg"/>
              <img className="book" alt="mediumismessage" src="/Portfolio/mediumismessage.jpg"/>
              <img className="book" alt="biocentrism" src="/Portfolio/biocentrism.jpg"/>
              <img className="book" alt="creativeact" src="/Portfolio/creativeact.jpg"/>
              <img className="book" alt="flow" src="/Portfolio/flow.jpg"/>
              <img className="book" alt="techniqueofmaster" src="/Portfolio/sunandsteel.jpg"/>
              <img className="book" alt="alphabetgoddess" src="/Portfolio/alphabetgoddess.jpg"/>
              <img className="book" alt="taoteching" src="/Portfolio/taoteching.jpg"/>
              <img className="book" alt="stocism" src="/Portfolio/stocism.jpg"/>
              <img className="book" alt="quantum body" src="/Portfolio/qbody.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage);