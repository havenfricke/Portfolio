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
                                    The <a href="https://www.kendallautoidaho.com/" target='_blank'>Kendall</a> Spokemaster's marketing campaign micro-website was a project during employment at 
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
                                    <a href="https://www.moffetco.com/" target="_blank">Moffet Energy Modeling</a>, a local business in Boise and a client of <a href="https://116andwest.com/" target='_blank' >
                                    116 & West Marketing Agency</a> during my employment with the company. The site was designed by a UI / UX specialist. 
                                    My involvement was primarily translating the design into a website, the deployment, and maintenance
                                    of the site once in production. 
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
                                    project description
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