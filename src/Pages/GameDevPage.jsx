import React from 'react';
import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow';

function GameDevPage()
{

    return (
            <section className='card-view-page'>
                <div className="card-view-banner">
                    <h2>Game Development</h2> 
                </div>
                <div className="row">
                    <div className='col-2-grid'>
    
                        <div className='info-card'>
                            <h3>Kendall Spokesmasters</h3>
                            <hr />
                            <div className='img-wrapper'>
                                <img src="/Portfolio/ksm1.png"/>
                            </div>
                            <ModalWindow title={"Kendall Spokesmasters 2a"}>
                                <div className='content-test'>content 1b</div>
                            </ModalWindow>
                        </div>
        
                        <div className='info-card'>
                            <h3>Spokespersons b</h3>
                            <hr />
                            <div className='img-wrapper'>
                                <img src="/Portfolio/ksm1.png"/>
                            </div>
                            <ModalWindow title={"Spondall Kendamsters 2b"}>
                                <div>content 2b</div>
                            </ModalWindow>
                        </div>
    
                        <div className='info-card'>
                            <h3>Spokespersons b</h3>
                            <hr />
                            <div className='img-wrapper'>
                                <img src="/Portfolio/ksm1.png"/>
                            </div>
                            <ModalWindow title={"Spondall Kendamsters 3b"}>
                                <div>content 3b</div>
                            </ModalWindow>
                        </div>
    
                        <div className='info-card'>
                            <h3>Spokespersons b</h3>
                            <hr />
                            <div className='img-wrapper'>
                                <img src="/Portfolio/ksm1.png"/>
                            </div>
                            <ModalWindow title={"Spondall Kendamsters 4b"}>
                                <div>content 4b</div>
                            </ModalWindow>
                        </div>
    
                    </div>
                </div>  
            </section>
    )
}

export default observer(GameDevPage);