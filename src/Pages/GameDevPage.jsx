import { observer } from 'mobx-react-lite';
import LazyImage from '../Components/LazyImage';
import ModalWindow from '../Components/ModalWindow';
import MarkdownFile from '../Components/MarkdownFile';

function GameDevPage()
{

    return (
            <section className='card-view-page'>
                <div className="card-view-banner">
                    <h2><strong>Game <br/>Development</strong></h2> 
                </div>
                <br />
                <div>
                    <h3 className='reel-title'>2024 - 2026 Gameplay Engineering Reel</h3>
                </div>
                <div className='video-container'>
                    <video src="/Portfolio/demoreelminified.webm" controls></video>
                    <img alt='arrow down indicator' src="/Portfolio/arrow-down.gif"/>
                </div>  
                <br />  
                <div className='row'>
                    <div className='col-2-grid'>
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity</a>: <a href='https://www.photonengine.com/pun' target='_blank'>Photon Network</a> Singleton
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Photon Network Singleton"}>
                                <div className='row'>
                                    <a href="https://github.com/havenfricke/PUN2_Net_Singleton" target="_blank">GitHub Repository Link</a>
                                </div>
                                <div className='row'>
                                    <MarkdownFile
                                    src="https://raw.githubusercontent.com/havenfricke/PUN2_Net_Singleton/refs/heads/main/README.md"
                                    className="modal-markdown"
                                    />
                                </div>
                            </ModalWindow>
                        </div>
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity Engine</a> Input Module
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Unity Input Module"}>
                                <div className='row'>
                                    <a href="https://github.com/havenfricke/Unity6_PlayerInputModule" target="_blank">GitHub Repository Link</a>
                                </div>
                                <div>
                                    <MarkdownFile
                                    src="https://raw.githubusercontent.com/havenfricke/Unity6_PlayerInputModule/refs/heads/main/README.md"
                                    className="modal-markdown"
                                    />
                                </div>
                            </ModalWindow>
                        </div>

                        <div className='info-card'>
                            <h3>
                                C++, DirectX 11, and HLSL
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/dx11.jpg"/>
                            </div>
                            <ModalWindow title={"C++, DirectX 11, and HLSL"}>
                                <div className='row'>
                                    <p>
                                        My individual research project done during my senior year at Boise State University while attending GIMM. 
                                        The project is meant to be a reference and learning resource for myself and my peers to get started learning
                                        how to build game engines using C++ and DirectX from source. 
                                        <br />
                                        <a href='https://github.com/havenfricke/Engine' target='_blank'>Github Repository Link</a><br />
                                    </p>
                                </div>
                                <div>
                                    <MarkdownFile
                                    src="https://raw.githubusercontent.com/havenfricke/Engine/refs/heads/master/README.md"
                                    className="modal-markdown"
                                    />
                                </div>
                            </ModalWindow>
                        </div>
     
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://angelscript.hazelight.se/">Unreal Engine</a> + <a target='_blank' href="">AngelScript</a>: 
                                <br />Soul Incarnate
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="angelscript_unreal.png"/>
                            </div>
                            <ModalWindow title={"Soul Incarnate"}>
                                <div className='row'>
                                    <p>
                                        <a href='https://github.com/havenfricke/Soul_Incarnate' target='_blank'>Github Repository Link</a><br />
                                        Content coming soon!
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity Engine</a> + <a target='_blank' href="https://www.photonengine.com/pun">PUN 2</a>: Trial by Fire
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Trial by Fire"}>
                                <div className='row'>
                                    <p>
                                        Content coming soon!
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="">Unreal Engine</a>: Fisticuffs
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="unreal-banner.webp"/>
                            </div>
                            <ModalWindow title={"Prototype Online Multiplayer Game"}>
                                <div className='row'>
                                    <p>
                                        <a href='https://github.com/havenfricke/Fisticuffs_UE5' target='_blank'>Github Repository Link</a><br />
                                        More content coming soon!
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity Engine</a> + <a target='_blank' href="https://www.photonengine.com/pun">PUN 2</a>: Wary Path
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Prototype Online Multiplayer Game"}>
                                <div className='row'>
                                    <p>
                                        <a href='https://github.com/havenfricke/Wary-Path' target='_blank'>Github Repository Link</a><br />
                                        More content coming soon!
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src=""/>
                                        <LazyImage src=""/>
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default observer(GameDevPage);