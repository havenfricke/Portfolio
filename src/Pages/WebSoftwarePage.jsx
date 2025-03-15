import React from 'react';
import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow'



function WebSoftwarePage()
{

    return (
        <section className='card-view-page'>
            <div className="card-view-banner">
                <h2>Web & Software</h2> 
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
                            <div className='content-test'>content 1</div>
                        </ModalWindow>
                    </div>
 
                    <div className='info-card'>
                        <h3>Spokespersons</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/ksm1.png"/>
                        </div>
                        <ModalWindow title={"Spondall Kendamsters"}>
                            <div>content 2</div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3>Spokespersons</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/ksm1.png"/>
                        </div>
                        <ModalWindow title={"Spondall Kendamsters"}>
                            <div>content 2</div>
                        </ModalWindow>
                    </div>

                    <div className='info-card'>
                        <h3>Spokespersons</h3>
                        <hr />
                        <div className='img-wrapper'>
                            <img src="/Portfolio/ksm1.png"/>
                        </div>
                        <ModalWindow title={"Spondall Kendamsters"}>
                            <div>content 2</div>
                        </ModalWindow>
                    </div>

                </div>
            </div>  
        </section>
    )
}

export default observer(WebSoftwarePage);