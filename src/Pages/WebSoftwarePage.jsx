import React from 'react';
import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow'
import { Skeleton } from '@mui/material';
import LazyImage from '../Components/LazyImage';




function WebSoftwarePage()
{

    return (
        <section className='card-view-page'>
            <div className="card-view-banner">
                <h2><strong>Web & Software<br /> Development</strong></h2> 
            </div>
            <div className="row">
                <div className='col-2-grid'>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://wordpress.com/">WordPress</a>: Kendall Spokesmasters</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/ksm1.png"/>
                        </div>
                        <ModalWindow title={"Kendall Spokesmasters"}>
                            <div className='row'>
                                <p>
                                    The <a href="https://www.kendallautoidaho.com/" target='_blank'>Kendall  
                                    Spokemaster's </a> <a href="https://www.kendallautogroup.com/kendall-spokesmasters/" target="_blank">
                                    marketing campaign</a> micro-website was a project during employment at 
                                    116 & West. Kendall Automotive Group, a client of 116 & West entrusted us with the creative work, 
                                    casting, filming, and additional marketing. My role was to build the website. Additional 
                                    responsibilities included testing, deploying to production, and maintenance.
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/ksm1.png"/>
                                    <LazyImage src="/Portfolio/ksm2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/ksm3.png"/>
                                    <LazyImage src="/Portfolio/ksm4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>
 
                    <div className='info-card'>
                        <h3><a target="_blank" href="https://wordpress.com/">WordPress</a>: Moffet Energy Modeling</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/mofen1.png"/>
                        </div>
                        <ModalWindow title={"Moffet Energy Modeling"}>
                            <div className='row'>
                                <p>
                                    <a href="https://www.moffetco.com/" target="_blank">Moffet Energy Modeling</a>, a local business in Boise and a client of 
                                    <a href="https://116andwest.com/" target='_blank' > 116 & West Marketing Agency </a> during my employment with the company. 
                                    The site was designed by a UI / UX specialist. My involvement was primarily translating the design into a website, 
                                    the deployment, and maintenance of the site once in production. 
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/mofen1.png"/>
                                    <LazyImage src="/Portfolio/mofen2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/mofen3.png"/>
                                    <LazyImage src="/Portfolio/mofen4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://react.dev/">React</a>: Vanilla Boilerplate</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/reactvan1.png"/>
                        </div>
                        <ModalWindow title={"React Vanilla Boilerplate"}>
                            <div className='row'>
                                <p>
                                    This GitHub repository is boilerplate code that I made for beginning web applications while attending  
                                    <a href="https://www.boisestate.edu/gimm/student-information/" target='_blank'> Boise State University</a>. 
                                    The architecture was learned during my time as a student at <a href="https://boisecodeworks.com/" target='_blank'>Boise CodeWorks</a>, 
                                    a trade school that focuses on teaching with refactored code to touch on basic concepts in a high 
                                    level, full stack development enironment. It is equipped with Vite's React starting application, 
                                    react mobx, react document object model, react router, and axios. 
                                    Additionally it has some example components, an application state, and API example call routes.
                                    This is a client, single-page application, and front end of a full stack application. 
                                    This website is using the boilerplate as a foundation.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/ReactApp-Vanilla-Starter" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/reactvan1.png"/>
                                    <LazyImage src="/Portfolio/reactvan2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/reactvan3.png"/>
                                    <LazyImage src="/Portfolio/reactvan4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://react.dev/">React</a> + <a target='_blank' href="https://d3js.org/">D3</a>: Data Narrative</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/reactd31.png"/>
                        </div>
                        <ModalWindow title={"React + D3 Data Narrative"}>
                        <div className='row'>
                                <p>
                                    React and D3 data visualization libraries combined to create a responsive data narrative. This project
                                    was completed during my time with <a href="https://www.boisestate.edu/gimm/" target='_blank'>GIMM</a>. 
                                    It challenged students to create a responsive front end application built on React that 
                                    gamified datasets. The goal with this project was to create an unbiased narrative with support from
                                    fossil fuel data, atmospheric records, basic economic concepts, and some general sentiments.
                                    The application is built on boilerplate code from my 
                                    <a href="https://github.com/havenfricke/ReactApp-Vanilla-Starter" target='_blank'> React client repository</a>. 
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/ReactD3MobileDataNarrative" target="_blank">GitHub Repository Link</a>
                                    <br />
                                    <br />
                                    <a href="https://havenfricke.github.io/ReactD3MobileDataNarrative" target="_blank">Website Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/reactd31.png"/>
                                    <LazyImage src="/Portfolio/reactd32.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/reactd33.png"/>
                                    <LazyImage src="/Portfolio/reactd34.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://react.dev/">React</a> + <a target="_blank" href="https://expressjs.com/">Express</a>:<br /> Website Builder Application</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/wb1.png"/>
                        </div>
                        <ModalWindow title={"Website Builder Application"}>
                        <div className='row'>
                                <p>
                                    React front-end and Express backend full stack application. The server's static HTML page enables create, 
                                    read, update, and delete routes for data management. The React front-end only contains a get, fetching the 
                                    public facing website's page content.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Website-Builder" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/wb1.png"/>
                                    <LazyImage src="/Portfolio/wb2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/wb3.png"/>
                                    <LazyImage src="/Portfolio/wb4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href="https://www.swift.org/">Swift</a>: Assistive App</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/aa1.jpg"/>
                        </div>
                        <ModalWindow title={"Swift: Assistive App"}>
                        <div className='row'>
                                <p>
                                    An iOS application that uses ARKit and peer-to-peer with the goal of assisting people who have non-verbal disabilities. 
                                    The application is meant to be used as a liaison between the business and customer, facilitating more efficient communication 
                                    with a specific demographic of customer.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Assistive-App" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/aa1.jpg"/>
                                    <LazyImage src="/Portfolio/aa2.jpg"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/aa3.jpg"/>
                                    <LazyImage src="/Portfolio/aa4.jpg"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href="https://www.swift.org/">Swift</a>: Photo Utlity Application</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/pua1.jpg"/>
                        </div>
                        <ModalWindow title={"Swift: Photo Utility Application"}>
                        <div className='row'>
                                <p>
                                    Project that uses SwiftData and device permissions to access photos. The intent of the project was to familiarize with SwiftData and
                                    the iOS device's photo library. Additionaly, apply the MVC pattern to Swift. The project was built on Swift, SwiftUI, and Xcode.
                                    Features include utilization of photos with proper access consent for an application on an iOS device.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/PhotoUtilityApp" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/pua1.jpg"/>
                                    <LazyImage src="/Portfolio/pua2.jpg"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/pua3.jpg"/>
                                    <LazyImage src="/Portfolio/pua4.jpg"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href="https://www.swift.org/">Swift</a>: iOS + MVC</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/iosmvc1.jpg"/>
                        </div>
                        <ModalWindow title={"Swift: iOS + MVC"}>
                        <div className='row'>
                                <p>
                                    Basic Model, View, Controller boilerplate iOS application designed as a blueprint for new projects. 
                                    In this setup, Swift's "Main Actor" or main dispatch queue of the iOS device doubles as a controller's code (MVC). 
                                    This is to prioritize processing power for the application when/if an API call is made over network and UI updates with returned data.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Swift-iOS-MVC" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/iosmvc1.jpg"/>
                                    <LazyImage src="/Portfolio/iosmvc2.jpg"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/iosmvc3.jpg"/>
                                    <LazyImage src="/Portfolio/iosmvc4.jpg"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href='https://dotnet.microsoft.com/en-us/download/dotnet-framework'>.NET</a>: Keepr</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/keepr1.png"/>
                        </div>
                        <ModalWindow title={"Keepr"}>
                        <div className='row'>
                                <p>
                                    Keepr is a project that I started in 2022 during my attendance at Boise Codeworks, a trade school that focuses on
                                    teaching with refactored code to touch on basic concepts in a high level, full stack development environment.
                                    The goal of the project was to create an application that resembled Pinterest. Only there are "keeps" and "vaults" that 
                                    allow users to group images. The images can be uploaded, edited, and deleted.
                                    Access permissions include private "keeps" or a collection of images uploaded and public. The project was built on
                                    Vue, Vue Router, SASS / SCSS, and Axios. The back end is built on .NET, Dapper, and MySQL.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/keepr" target='_blank'> Keepr repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/keepr1.png"/>
                                    <LazyImage src="/Portfolio/keepr2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/keepr3.png"/>
                                    <LazyImage src="/Portfolio/keepr4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: PlanIt</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/planit1.png"/>
                        </div>
                        <ModalWindow title={"PlanIt"}>
                        <div className='row'>
                                <p>
                                    PlanIt is a project that I started in 2022 during my attendance at Boise Codeworks, a trade school that focuses on
                                    teaching with refactored code to touch on basic concepts in a high level, full stack development environment.
                                    The goal of the project was to create a full stack application that allows users to
                                    create, edit, and delete projects then sprints (Agile framework) within those projects. 
                                    Sprints can be shared to other users via url. The project was built on
                                    Vue, Vue Router, SASS / SCSS, and Axios. The back end is built on Node.js, Express, and MongoDB.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/PlanIt" target='_blank'> PlanIt repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/planit1.png"/>
                                    <LazyImage src="/Portfolio/planit2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/planit3.png"/>
                                    <LazyImage src="/Portfolio/planit4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: Mus.io</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/musio1.png"/>
                        </div>
                        <ModalWindow title={"Mus.io"}>
                        <div className='row'>
                                <p>
                                    Mus.io - A Vue + Express prototype application designed for musicians, venues, 
                                    and music driven groups to showcase and sell their live talent. The goal was to 
                                    have the artist / agent, promotor, and the business/venue share a platform as co-participants.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Mus-io" target='_blank'> Mus.io repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/musio1.png"/>
                                    <LazyImage src="/Portfolio/musio2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/musio3.png"/>
                                    <LazyImage src="/Portfolio/musio4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                     <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: Tower</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/Portfolio/tower1.png"/>
                        </div>
                        <ModalWindow title={"Tower"}>
                        <div className='row'>
                                <p>
                                    Vue + Express prototype web application geared towards event planning, browsing, and attending. 
                                    Users can create events, set an event date or time, and set an amount of seats for the event. 
                                    Other users can find the event and RSVP. Events are viewed and managed from the user's profile view. 
                                    Events can be cancelled, deleted, or both.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Tower" target='_blank'> Mus.io repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/tower1.png"/>
                                    <LazyImage src="/Portfolio/tower2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/Portfolio/tower3.png"/>
                                    <LazyImage src="/Portfolio/tower4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                </div>
            </div>  
        </section>
    )
}

export default observer(WebSoftwarePage);