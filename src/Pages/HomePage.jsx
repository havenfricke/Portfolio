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
      </div>
      <div className="home-content">
        <div className="info-card">
            <p>
              Hello. 
              <br />
              <br />
              In the twenty-first century we've made strides with our technology. I feel honored to be a part of this journey taking place here and now.
              It is a privilege to have the ability to use technology and utilize its capabilities. The ocean of possibilities is vast in computing.
              I intend to explore these waters.
              <br/>
              <br/>
              I was born in Tucson, Arizona and have lived in Idaho, Arizona, Hawaii, Colorado, and California. All throughout my residency in each place, technology has been present.
              Almost as far back as I can remember, a computer was available. Gone are the days of iPods and dial-up internet.
              <br />
              <br />
              Information systems have an unexplainable allure to me. Although mysterious, one thing is certain. I live to see the butterfly effect of technological advancement.
              The waves of advancement turn all our attention to the horizon of possibilities. When new breakthroughs occur, my interest remains.
              <br />
              <br />
              Before my professional journey in technology began I did a lot of hobbyist gaming and audio production. The base of my understanding in information technology led me to web development.
              From backend data relationships to beautifully crafted frontend user experiences, my roots lie in the web. The interest has evolved and my
              skills remained persistent. Gratitude to my mentors. There was a particular fascination with shading language not long after solidifying
              my understanding of software development.
              <br />
              <br />
              Intuitively, I followed this interest. Ikigai demanded it.
              <br />
              <br />
              This interest led me to begin studying at Boise State University to pursue my BSc in Games, Interactive Media, and Mobile. Computer science is cool but, what can I do with it?
              What are some applications? How do I apply it in the fashion I'm interested in? These were the questions I wanted to answer.
              <br />
              <br />
              Experience with the GIMM program explored a multitude of different available technologies and techniques that were all thrilling to be a part of.
              Game engines, UI/UX, product design, interactive programming, audio production, physical computing, 3D animation / modeling / texturing, XR experiences, and many more
              worthy mentions including web and software development.
              <br />
              <br />
              I beleive in listening to the way the wind moves and following the journey it has for you. As the journey continues on this vast horizon I am reminded constantly of the 
              truly amazing privilege it is to be a part of what I do.
              <br />
              <br />
              - Haven
            </p>
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage);