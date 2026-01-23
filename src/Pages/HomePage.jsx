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
           {/* <a href="https://app.joinhandshake.com/profiles/w975ep" target="_blank"><img className="linkedin" src="/Portfolio/handshake.svg" title="open in new tab"/></a> */}
        </h3>
      </div>
      <div className="home-content">
        <div className="info-card">
          <p>
            &nbsp;&nbsp;Thank you for being here, my name is Haven Fricke. I am a software developer, game developer, and interactive media creator with a passion for crafting engaging experiences.
            Composition comes in many forms. Previously, composing music and sound design consumed much of my time and energy. Although very much a passion of mine, 
            I found my medium to express creativity and ideas through technology. <br /><br />
            &nbsp;&nbsp;My Ikigai is located where composition skills, perception of communication technologies, an intuition in design, and expertise that comes with many years of working 
            with computing technology comes together. Computing as a means to communicate ideas and provide utility using organized, accessible information is a tactical and technological approach 
            to business success and what I specialize in. <br /><br />
            &nbsp;&nbsp;Music theory points to a system - a language of organization and structure. Software development and computing are similar in that they also rely on systems of 
            organization and structure to create functional and efficient solutions. Melodic patterns and harmonies can be likened to algorithms and data structures in programming. <br /><br />
            &nbsp;&nbsp;Dissonance may occur when chord stacks are out of key or a function's purpose built as it was not intended, 
            requiring adjustments and refinements to achieve the desired outcome.
            There is harmony in structure and self-discipline, whether in a musical composition or a well-designed software application. 
            My process is refined by understanding of systems, structure, and group dynamics when working alongside developers, artists, or engineers.
            <br /><br />
            &nbsp;&nbsp;My past experience as a tactical communicator in the United States Marine Corps plays heavily into my ability to engineer and innovate new technologies. Breaking through mental obstacles and maintaining 
            focus under pressure has shaped my approach to problem-solving and project management. My strategy is to establish solutions that maintain longevity of use and purpose through good design and architecture by first
            curating a sound mind and body for the ideas and inspiration that are necessary for my process to create effective results.<br /><br />
            If language is the masculine aspect of communication, then visual and auditory are the feminine aspects. Both are necessary for a complete expression of ideas and emotions. I strive to balance these aspects in my work, 
            creating experiences that are not only functional but also engaging and meaningful.<br /><br />
            <br /> 
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
              <img className="book" alt="techniqueofmaster" src="/Portfolio/techniqueofmaster.jpg"/>
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