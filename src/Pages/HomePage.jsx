import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MagicEightBall from "../Components/MagicEightBall";


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
            My name is Haven. Thanks for visiting.
            In my portfolio you will find work in software development, games, and other topics. 
            If you have any other questions about me or questions in general, please feel free to reach out or, 
            use the magic eight ball below by clicking on it. Thanks!
          </p>
          <p></p>
        </div>
        <MagicEightBall />
      </div>
    </section>
  )
}

export default observer(HomePage);