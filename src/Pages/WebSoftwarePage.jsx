import React from 'react';
import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow'



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
                        <h3>Kendall Spokesmasters</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/ksm1.png"/>
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
                                    <img src="/Portfolio/ksm1.png"/>
                                    <img src="/Portfolio/ksm2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <img src="/Portfolio/ksm3.png"/>
                                    <img src="/Portfolio/ksm4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>
 
                    <div className='info-card'>
                        <h3>Moffet Energy Modeling</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/mofen1.png"/>
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
                                    <img src="/Portfolio/mofen1.png"/>
                                    <img src="/Portfolio/mofen2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <img src="/Portfolio/mofen3.png"/>
                                    <img src="/Portfolio/mofen4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3>React Vanilla Boilerplate</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/reactvan1.png"/>
                        </div>
                        <ModalWindow title={"React Vanilla Boilerplate"}>
                            <div className='row'>
                                <p>
                                    This GitHub repository is boilerplate code that I made for beginning web applications while attending  
                                    <a href="https://www.boisestate.edu/gimm/student-information/" target='_blank'> Boise State University</a>. 
                                    The architecture was learned during my time as a student at <a href="https://boisecodeworks.com/" target='_blank'>Boise CodeWorks</a>, 
                                    a trade school that focuses on teaching with refactored code to touch on basic concepts in a high 
                                    level, full stack development enironment. It is equipped with vite's React starting application, 
                                    react mobx, react document object model, react router, and axios. 
                                    Additionally it has some example components, an application state, and API example call routes.
                                    This is a client, single-page application, and front end of a full stack application. 
                                    This website is using the boilerplate as a foundation.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenf/ReactApp-Vanilla-Starter" target="_blank">GitHub Repository Link</a>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <img src="/Portfolio/reactvan1.png"/>
                                    <img src="/Portfolio/reactvan2.png"/>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <img src="/Portfolio/reactvan3.png"/>
                                    <img src="/Portfolio/reactvan4.png"/>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3>Spokespersons sds</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/ksm1.png"/>
                        </div>
                        <ModalWindow title={"Spondall Kendamsters 1d"}>
                            <div className='modal-body'>
                                content 4
                            </div>
                        </ModalWindow>
                    </div>

                </div>
            </div>  
        </section>
    )
}

export default observer(WebSoftwarePage);