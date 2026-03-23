import { useEffect } from "react";
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
        <h3>Software & Programming, 3D Engines, Full Stack, Microcontrollers</h3><br /> 
        <h3 className="home-icons">
          <a href="https://www.linkedin.com/in/haven-fricke/" target="_blank"><img className="linkedin" src="/linkedin-brands.svg" title="view LinkedIn profile"/></a>
          <a href="https://x.com/havenf_gg" target="_blank"><img className="x-twitter" src="/x-twitter.svg" title="view Twitter / X profile"/></a>
          <a href="mailto:havenfricke@u.boisestate.edu" target="_blank"><img className="email" src="/envelope-solid.svg" title="email me"/></a>
          <a href="/Haven_Fricke_Resume.pdf" target="_blank"><img className="file" title="view my resume" src="/file.svg"/></a>
        </h3>
      </div>
      <div className="home-content">
        <div className="info-card">
            <h3><a href="/websoftware">Full-stack and Cloud Infrastructure</a></h3>  
            <ul>
              <li>Backend: Node.js, Express.ts/js, TypeScript, JavaScript</li>  
              <li>Frontend: React, Vue.js, Interactive/Real-time dashboards, Interactive Data</li> 
              <li>Databases & Data: MySQL, Time-series databases</li>
              <li>Cloud & DevOps: CI/CD, Cloud deployment</li>
              <li>Security: JWT, OAuth, Parameterized queries</li>
            </ul>
            <h3><a href="/iot">Infrastructure and Environment</a></h3>
            <ul>
              <li>Operating System: RHEL (Red Hat Enterprise Linux)</li>
              <li>DevOps & Automation: Python (Tooling/Scripting), CI/CD, Cloud deployment</li>
            </ul>
            <h3><a href="/gamedev">Game Dev and Graphics</a></h3>
              <ul>
                <li>Engines & Frameworks: Unity (C#), Unreal Engine (Blueprint), Custom Engines (DirectX/C++/HLSL)</li>
                <li>Languages: C#, C++, HLSL.</li>
                <li>Graphics & Rendering: Shader programming, GPU instancing, LOD systems, Performance optimization</li>
                <li>Full Pipeline: Sculpting, Meshing, UV mapping, Rigging, Animation, Root Motion</li>
                <li>Gameplay Systems: AI state machines, Physics simulation, Player Locomotion, Game Controls</li>
                <li>Platforms: PC, Android, Console.</li>
              </ul>
            <h3><a href="/gamedev">Networking and Multiplayer</a></h3>
              <ul>
                <li>Architecture: Server/Client Model, Authoritative server architecture, State synchronization</li>
                <li>Communication: Remote Procedure Calls (RPCs)</li>
                <li>Live Services: Matchmaking, Analytics integration</li>
                <li>Multiplayer Logic: Real-time multiplayer systems</li>
              </ul>
            <h3><a href="/iot">Hardware and Edge Systems</a></h3>
            <ul>
              <li>Embedded Systems: Arduino, Arduino IDE (C++), Sensor integration</li>
              <li>Edge Computing: Local processing, Edge computing, Offline capabilities</li>
              <li>IoT Infrastructure: Real-time data processing, Sensor, Servers, and Databases</li>
            </ul>
            <br />
            <br />
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage);