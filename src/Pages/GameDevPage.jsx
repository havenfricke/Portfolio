import React from 'react';
import { observer } from 'mobx-react-lite';
import ModalWindow from '../Components/ModalWindow';
import LazyImage from '../Components/LazyImage';

function GameDevPage()
{

    return (
            <section className='card-view-page'>
                <div className="card-view-banner">
                    <h2><strong>Game <br/>Development</strong></h2> 
                </div>
                <div className="row">
                    <div className='col-2-grid'>
    
                        <div className='info-card'>
                            <h3>Wary Path Game Update: 05.2025</h3>
                            <hr />
                            <div className="img-wrapper">
                                <LazyImage src="" />
                            </div>
                            <ModalWindow title={"Wary Path Game Update: 05.2025 "}>
                            <div className='row'>
                                <p>
                                    Unity Game Engine project prototyping a game. This project
                                    was completed during my time with <a href="https://www.boisestate.edu/gimm/" target='_blank'>GIMM</a>. 
                                    <br />
                                    <br />
                                </p>
                            </div>
                            <div className='row'>
                            <iframe className='video-player' src="https://drive.google.com/file/d/1hcMgP3iCLdyrBgm1oVNJoNnTPrdLpEzm/preview" ></iframe>
                            </div>
                            <div className='row'>
                            <iframe className='video-player' src="https://drive.google.com/file/d/1VgssK52dBwFmQN16f7RXkTbxz-dlrZTp/preview" ></iframe>
                            </div>
                            </ModalWindow>
                        </div>
                    </div>
                </div>  
            </section>
    )
}

export default observer(GameDevPage);