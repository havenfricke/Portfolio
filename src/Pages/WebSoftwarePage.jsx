import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow'
import LazyImage from '../Components/LazyImage';
import MarkdownFile from '../Components/MarkdownFile';



function WebSoftwarePage()
{
    return (
        <section className='card-view-page'>
            <div className="card-view-banner">
                <h2><strong>Web & Software</strong></h2> 
            </div>
            <div className="row">
                <div className='col-2-grid'>

                     <div className='info-card'>
                        <h3>
                            Fullstack TypeScript
                        </h3>
                        <hr />  
                        <div className='img-wrapper'>
                            <LazyImage src="/tsexpress.png"/>
                        </div>
                        <ModalWindow title={"Fullstack TypeScript"}>
                            <div className='row'>
                                <p>
                                    A project to learn TypeScript and build a fullstack scaffold for future projects. The architecture is one I have used
                                    from prior education at Boise Codeworks. It was originally taught in JavaScript using Vue, Express, and .NET web server.
                                    Since 2024 TypeScript has become the standard to replace JavaScript. The wild west days of JavaScript are beginning
                                    to end as web infrastructure demands typed languages as the standard moving forward. This project is a means of staying with
                                    the times and honing my skills. It features a React client and Express server. The React client is equipped with a router, 
                                    application state using mobx, models, and prewritten service routes for web API calls. The server is equipped with dotenv
                                    and mysql2 for secure environment variables and parameterized queries.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Fullstack-Indentity-Vite-React-Express-Auth0" target='_blank'>GitHub Repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                 <MarkdownFile
                                src="https://raw.githubusercontent.com/havenfricke/TypeScript-Fullstack/refs/heads/main/README.md"
                                className="modal-markdown"
                                />
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3>
                            <a target="_blank" href="https://react.dev/">React</a> + <a target="_blank" href="https://expressjs.com/">Express</a> + <a target="_blank" href="https://auth0.com/">Auth0</a>:
                            <br />Fullstack Identity
                        </h3>
                        <hr />  
                        <div className='img-wrapper'>
                            <LazyImage src="/fsida3.png"/>
                        </div>
                        <ModalWindow title={"Fullstack Identity Assertion"}>
                            <div className='row'>
                                <p>
                                    A summer JavaScript project to demystify login services in a fullstack software environment. The project features a React front end and 
                                    Express backend that connects with Auth0 login services. The client and Auth0 first talk to each other to confirm identity
                                    credentials then, the client and back end talk to each other to store users that Uath0 has verified via email. The architecture
                                    proves strong as a scaffold for the start of your next full stack project.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Fullstack-Indentity-Vite-React-Express-Auth0" target='_blank'>GitHub Repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                 <MarkdownFile
                                src="https://raw.githubusercontent.com/havenfricke/Fullstack-Indentity-Vite-React-Express-Auth0/refs/heads/main/README.md"
                                className="modal-markdown"
                                />
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/fsida1.png"/>
                                    <LazyImage src="/fsida2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/fsida3.png"/>
                                    <LazyImage src="/fsida4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://wordpress.com/">WordPress</a>: Kendall Spokesmasters</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/ksm1.png"/>
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
                                    <LazyImage src="/ksm1.png"/>
                                    <LazyImage src="/ksm2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/ksm3.png"/>
                                    <LazyImage src="/ksm4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>
 
                    <div className='info-card'>
                        <h3><a target="_blank" href="https://wordpress.com/">WordPress</a>: Moffet Energy Modeling</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/mofen1.png"/>
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
                                    <LazyImage src="/mofen1.png"/>
                                    <LazyImage src="/mofen2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/mofen3.png"/>
                                    <LazyImage src="/mofen4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://react.dev/">React</a>: Vanilla Scaffold</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/reactvan1.png"/>
                        </div>
                        <ModalWindow title={"React Vanilla Scaffold"}>
                            <div className='row'>
                                <p>
                                    This GitHub repository is scaffold code that I made for beginning web applications while attending  
                                    <a href="https://www.boisestate.edu/gimm/student-information/" target='_blank'> Boise State University</a>. 
                                    The architecture was learned during my time as a student at <a href="https://boisecodeworks.com/" target='_blank'>Boise CodeWorks</a>, 
                                    a trade school that focuses on teaching with refactored code to touch on basic concepts in a high 
                                    level, full stack development enironment. It is equipped with Vite's React starting application, 
                                    react mobx, react document object model, react router, and axios. 
                                    Additionally it has some example components, an application state, and API example call routes.
                                    This is a client, single-page application, and front end of a full stack application. 
                                    This website is using the scaffold as a foundation.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/ReactApp-Vanilla-Starter" target="_blank">GitHub Repository Link</a>
                                   
                                </p>    
                            </div>
                            <div className='row'>
                                 <MarkdownFile src="https://raw.githubusercontent.com/havenfricke/ReactApp-Vanilla-Starter/refs/heads/main/README.md" className="modal-markdown"/>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/reactvan1.png"/>
                                    <LazyImage src="/reactvan2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/reactvan3.png"/>
                                    <LazyImage src="/reactvan4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://react.dev/">React</a> + <a target='_blank' href="https://d3js.org/">D3</a>: Data Narrative</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/reactd31.png"/>
                        </div>
                        <ModalWindow title={"React + D3 Data Narrative"}>
                        <div className='row'>
                                <p>
                                    React and D3 data visualization libraries combined to create a responsive data narrative. This project
                                    was completed during my time with <a href="https://www.boisestate.edu/gimm/" target='_blank'>GIMM</a>. 
                                    It challenged students to create a responsive front end application built on React that 
                                    gamified datasets. The goal with this project was to create an unbiased narrative with support from
                                    fossil fuel data, atmospheric records, basic economic concepts, and some general sentiments.
                                    The application is built on scaffold code from my 
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
                                    <LazyImage src="/reactd31.png"/>
                                    <LazyImage src="/reactd32.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/reactd33.png"/>
                                    <LazyImage src="/reactd34.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target="_blank" href="https://react.dev/">React</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: Website Builder</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/wb1.png"/>
                        </div>
                        <ModalWindow title={"Website Builder"}>
                        <div className='row'>
                                <p>
                                    React front-end and Express backend full stack application. The server's static HTML page enables create, 
                                    read, update, and delete routes for data management. The React front-end only contains a get, fetching the 
                                    public facing website's page content. This project features basic capability in translating HTML and uploaded
                                    images to a React front-end to mimic the features of a content management system such as WordPress. It uses
                                    a MySQL database to store images in Base64 format and raw HTML plus its inner text. The user interface to input HTML
                                    and images is served from a static HTML page from the back end (Express).  
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Website-Builder" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/wb1.png"/>
                                    <LazyImage src="/wb2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/wb3.png"/>
                                    <LazyImage src="/wb4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href="https://www.swift.org/">Swift</a>: Assistive App</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/aa1.jpg"/>
                        </div>
                        <ModalWindow title={"Swift: Assistive App"}>
                        <div className='row'>
                                <p>
                                    An iOS application that uses ARKit and peer-to-peer with the goal of assisting people who have non-verbal disabilities. 
                                    The application is meant to be used as a liaison between the business and customer, facilitating more efficient communication 
                                    with a specific demographic of customer. Using ARKit, cloud computing, and Swift, this application allows users to check in
                                    to a business and identiify as a customer. Once the system identifies the customer, information based on a user profile is 
                                    sent to the business's side of the application to better accomodate the user as a customer.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Assistive-App" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/aa1.jpg"/>
                                    <LazyImage src="/aa2.jpg"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/aa3.jpg"/>
                                    <LazyImage src="/aa4.jpg"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href="https://www.swift.org/">Swift</a>: Photo Utlity</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/pua1.jpg"/>
                        </div>
                        <ModalWindow title={"Swift: Photo Utility Application"}>
                        <div className='row'>
                                <p>
                                    Project that uses SwiftData and device permissions to access photos. The intent of the project was to familiarize with SwiftData and
                                    the iOS device's photo library. Additionaly, apply the MVC pattern to Swift. The project was built on Swift, SwiftUI, and Xcode.
                                    Features include utilization of photos with proper access consent for an application on an iOS device. A good starting point for
                                    applications that needs to access iPhone's photos.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/PhotoUtilityApp" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/pua1.jpg"/>
                                    <LazyImage src="/pua2.jpg"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/pua3.jpg"/>
                                    <LazyImage src="/pua4.jpg"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href="https://www.swift.org/">Swift</a>: iOS + MVC</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/iosmvc1.jpg"/>
                        </div>
                        <ModalWindow title={"Swift: iOS + MVC"}>
                        <div className='row'>
                                <p>
                                    Basic Model, View, Controller scaffold iOS application designed as a blueprint for new projects. 
                                    In this setup, Swift's "Main Actor" or main dispatch queue of the iOS device doubles as a controller's code (MVC). 
                                    This is to prioritize processing power for the application when/if an API call is made over network and UI updates with returned data.
                                    The idea was to bring a familiar structure in software to iOS to better organize and understand an application. This architecture
                                    serves as a clean starting point for new projects and offers a clearly defined design contract to the develper or engineer using it.
                                    Controllers in this architecture are responsible for updating the views in an iOS application, creating a distinct separation of 
                                    concerns that scales well.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Swift-iOS-MVC" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/iosmvc1.jpg"/>
                                    <LazyImage src="/iosmvc2.jpg"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/iosmvc3.jpg"/>
                                    <LazyImage src="/iosmvc4.jpg"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href='https://dotnet.microsoft.com/en-us/download/dotnet-framework'>.NET</a>: Keepr</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/keepr1.png"/>
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
                                    <LazyImage src="/keepr1.png"/>
                                    <LazyImage src="/keepr2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/keepr3.png"/>
                                    <LazyImage src="/keepr4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: PlanIt</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/planit1.png"/>
                        </div>
                        <ModalWindow title={"PlanIt"}>
                        <div className='row'>
                                <p>
                                    PlanIt is a project that I started in 2022 during my attendance at Boise Codeworks, a trade school that focuses on
                                    teaching with refactored code to touch on basic concepts in a high level, full stack development environment.
                                    The goal of the project was to create a full stack application that allows users to
                                    create, edit, and delete projects for sprints (Agile/Scrum framework) in a group setting.
                                    Sprints can be shared to other users via url. The project was built on
                                    Vue, Vue Router, SASS / SCSS, and Axios. The back end is built on Node.js, Express, and MongoDB.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/PlanIt" target='_blank'> PlanIt repository</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/planit1.png"/>
                                    <LazyImage src="/planit2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/planit3.png"/>
                                    <LazyImage src="/planit4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: Mus.io</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/musio1.png"/>
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
                                    <LazyImage src="/musio1.png"/>
                                    <LazyImage src="/musio2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/musio3.png"/>
                                    <LazyImage src="/musio4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                     <div className='info-card'>
                        <h3><a target='_blank' href='https://vuejs.org/'>Vue</a> + <a target="_blank" href="https://expressjs.com/">Express</a>: Tower</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <LazyImage src="/tower1.png"/>
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
                                    <LazyImage src="/tower1.png"/>
                                    <LazyImage src="/tower2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="/tower3.png"/>
                                    <LazyImage src="/tower4.png"/>
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