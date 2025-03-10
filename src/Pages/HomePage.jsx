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
        <h2>Haven Fricke</h2>
        <h3>Interactive Developer | Web | Mobile | Games</h3>
      </div>
      <div className="home-content">
        Content
      </div>
    </section>
  )
}

export default observer(HomePage);