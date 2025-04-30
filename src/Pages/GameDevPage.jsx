import React from 'react';
import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow';

function GameDevPage()
{

    return (
            <section className='card-view-page'>
                <div className="card-view-banner">
                    <h2><strong>Game Development</strong></h2> 
                </div>
                <div className="row">
                    <div className='col-2-grid'>
    
                        <div className='info-card'>
                            <h3>Wary Path</h3>
                            <hr />
                            <div className='img-wrapper'>
                                <img src="/Portfolio/ksm1.png"/>
                            </div>
                            <ModalWindow title={"Wary Path"}>
                            <div className='row'>
                                <p>
                                    Unity Game Engine project prototyping a game. This project
                                    was completed during my time with <a href="https://www.boisestate.edu/gimm/" target='_blank'>GIMM</a>. 
                                </p>
                            </div>
                            <div className='row'>
                            <iframe className='video-player' src="https://drive.google.com/file/d/1hcMgP3iCLdyrBgm1oVNJoNnTPrdLpEzm/preview" width="640" height="480" allow="autoplay"></iframe>
                            </div>
                            <div className='row'>
                            <iframe src="https://drive.google.com/file/d/1VgssK52dBwFmQN16f7RXkTbxz-dlrZTp/preview" width="640" height="480" allow="autoplay"></iframe>
                            </div>
                            </ModalWindow>
                        </div>
                    </div>
                </div>  
            </section>
    )
}

export default observer(GameDevPage);