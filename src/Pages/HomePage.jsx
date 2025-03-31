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
        </h3>
      </div>
      <div className="home-content">
        <div className="info-card">
          <p>
            Hello. My name is Haven I like technology and love working with it. Thanks for visiting my website. I hope you enjoy looking around.
            On this site you will find some of my work in various areas primarily dealing with software development, games, and other topics. 
            If you have any other questions about me or questions in general, please use the magic eight ball below by clicking on it. Thanks!
          </p>
          <MagicEightBall />
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage);