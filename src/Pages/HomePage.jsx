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
        <hr />
        <h3>Software Developer</h3><br /> 
      </div>
      <div className="home-content">
        <h2>Bio</h2>
        <hr />
        <div className="info-card">
            
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage);