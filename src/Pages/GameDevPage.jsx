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
                    <video src="/Portfolio/demoreelminified.webm" poster="/Portfolio/link-thumbnail.png" controls></video>
                    <img alt='arrow down indicator' src="/Portfolio/arrow-down.gif"/>
                </div>  
                <br />  
                <div className='row'>
                    <div className='col-2-grid'>
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
                                        This is the third of three prototype iterations in Unity Engine (HDRP) done during my time with GIMM at Boise State University. 
                                        This project features VFX, <a href="https://www.photonengine.com/pun" target='_blank'>PUN 2</a> multiplayer, player stats, 
                                        and more. Stay tuned! As I work on this project more content will be here.
                                        <br />
                                        <br />
                                        <a href='https://github.com/havenfricke/Open-World-RPG-Prototype' target='_blank'>First Iteration Repository Link</a><br />
                                        <a href='https://github.com/havenfricke/Wary-Path' target='_blank'>Second Iteration Repository Link</a><br />
                                        <a href='' target='_blank'>Third Iteration Repository Link (Coming Soon)</a><br />
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/tbf_1.png"/>
                                        <LazyImage src="/Portfolio/tbf_2.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/tbf_3.png"/>
                                        <LazyImage src="/Portfolio/tbf_4.png"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/tbf_5.png"/>
                                        <LazyImage src="/Portfolio/tbf_6.png"/>
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
                                        A group project during my time with GIMM at Boise State University. The goal within the group was to learn Unreal Engine 5. Features 
                                        very basic multiplayer auto-matchmaking, state-machine AI, collision detection, health systems, and a beautifully crafted saloon level.
                                        Team members consisted of myself, <a href="https://www.linkedin.com/in/aidan-link/" target="_blank">Aidan Link</a>, 
                                        and <a href="https://www.linkedin.com/in/kadenvissotski/" target="_blank">Kaden Vissotski</a>.
                                        <br />
                                        <br />
                                        <a href='https://github.com/havenfricke/Fisticuffs_UE5' target='_blank'>Github Repository Link</a><br />
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_1.png"/>
                                        <LazyImage src="/Portfolio/fisti_2.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_3.png"/>
                                        <LazyImage src="/Portfolio/fisti_4.png"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_5.png"/>
                                        <LazyImage src="/Portfolio/fisti_6.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_7.png"/>
                                        <LazyImage src="/Portfolio/fisti_8.png"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_9.png"/>
                                        <LazyImage src="/Portfolio/fisti_10.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_11.png"/>
                                        <LazyImage src="/Portfolio/fisti_12.png"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/fisti_13.png"/>
                                        <LazyImage src="/Portfolio/fisti_14.png"/>
                                    </div>  
                                </div>
                            </ModalWindow>
                        </div>
                        <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity</a>: <a href='https://www.photonengine.com/pun' target='_blank'>PUN 2</a> Singleton
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"PUN 2 Singleton"}>
                                <div className='row'>
                                    <p>
                                        A singleton pattern network facade that is meant to be a liason between Photon classes / methods that provide online services. This script
                                        is written to solidify understanding, of <a href='https://www.photonengine.com/pun' target='_blank'>PUN 2</a> features, RPCs, and
                                        server / client model based multiplayer games.
                                        <br />
                                        <br />
                                        <a href="https://github.com/havenfricke/PUN2_Net_Singleton" target="_blank">GitHub Repository Link</a>
                                    </p>  
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
                                    <p>
                                        A modular script for Unity 6 default input system that forwards control inputs. The design pattern keeps game logic
                                        away from input into a clear, easy-to-understand system. This modular C# script has the ability to handle both UI
                                        and Player input schemes that comes out of the box with Unity 6.
                                        <br />
                                        <br />
                                        <a href="https://github.com/havenfricke/Unity6_PlayerInputModule" target="_blank">GitHub Repository Link</a>
                                    </p>     
                                </div>
                                <div>
                                    <div className='row'>
                                        <MarkdownFile
                                        src="https://raw.githubusercontent.com/havenfricke/Unity6_PlayerInputModule/refs/heads/main/README.md"
                                        className="modal-markdown"
                                        />
                                    </div>
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
                                        how to build game engines using C++ and DirectX from source. It also serves as a learning resource to understand 
                                        the general mechanisms of modern game engines such as Unity or Unreal.
                                        <br />
                                        <br />
                                        <a href='https://github.com/havenfricke/Engine' target='_blank'>Github Repository Link</a><br />
                                    </p>
                                </div>
                                <div>
                                    <div className='row'>
                                        <MarkdownFile
                                        src="https://raw.githubusercontent.com/havenfricke/Engine/refs/heads/master/README.md"
                                        className="modal-markdown"
                                        />
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                         <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity</a>: Accessible Text Compenent
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Unity Accessible Text Component"}>
                                <div className='row'>
                                    <p>
                                        An algorithm script component for Text Mesh Pro GUI GameObjects in Unity. The algorithm is based on 
                                        <a href='https://bionic-reading.com/' target='_blank'> Bionic Reading</a>'s style of text alteration. The text is for individuals
                                        with cognitive impairments. Specifically made for ADHD and Dyslexic people. 
                                        <br />
                                        <br />
                                        <a href="https://github.com/havenfricke/Unity_AccessibleText" target="_blank">GitHub Repository Link</a>
                                    </p>  
                                </div>
                                <div className='row'>
                                    <MarkdownFile
                                    src="https://raw.githubusercontent.com/havenfricke/Unity_AccessibleText/refs/heads/main/README.md"
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
                                <a target="_blank" href="https://unity.com/">Unity Engine</a> + <a target='_blank' href="https://www.photonengine.com/pun">PUN 2</a>: Wary Path
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Prototype RPG Multiplayer Game"}>
                                <div className='row'>
                                    <p>
                                        This is the second of three prototype iterations in Unity Engine done during my time with GIMM at Boise State University. 
                                        The idea was to take opinionated features from the first iteration and scale the project down to learn the 
                                        full pipeline of 3D modeling, rigging, and animating with 
                                        <a href="https://www.autodesk.com/products/maya/overview" target="_blank"> Autdesk Maya </a> 
                                        to then integrate into a game. All assets in this game are created by me as a requirement of the school program 
                                        (models, animations, and character rig). The game also uses <a href="" target="_blank">PUN 2 </a> 
                                        for multiplayer state synchronization, features a basic inventory system, and RNG loot drops from other players.
                                        <br />
                                        <br />
                                        <a href='https://github.com/havenfricke/Full-Rig-Idle-Humanoid' target='_blank'>Humanoid Model + Rig</a><br />
                                        <a href='https://github.com/havenfricke/Open-World-RPG-Prototype' target='_blank'>First Iteration Repository Link</a><br />
                                        <a href='https://github.com/havenfricke/Wary-Path' target='_blank'>Second Iteration Repository Link</a><br />
                                        <a href='' target='_blank'>Third Iteration Repository Link (Coming Soon)</a><br />
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/wapa_1.png"/>
                                        <LazyImage src="/Portfolio/wapa_2.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/wapa_3.png"/>
                                        <LazyImage src="/Portfolio/wapa_4.png"/>
                                    </div>
                                </div>
                                                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/wapa_5.png"/>
                                        <LazyImage src="/Portfolio/wapa_6.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/wapa_7.png"/>
                                        <LazyImage src="/Portfolio/wapa_8.png"/>
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                         <div className='info-card'>
                            <h3>
                                <a target="_blank" href="https://unity.com/">Unity</a> + 
                                <a target='_blank' href="https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.9/manual/networking-concepts.html"> Netcode</a>: 
                                Prototype RPG Multiplayer Game
                            </h3>
                            <hr />    
                            <div className='img-wrapper'>
                                <LazyImage src="/Portfolio/unity-banner.jpg"/>
                            </div>
                            <ModalWindow title={"Prototype RPG Multiplayer Game"}>
                                <div className='row'>
                                    <p>
                                        This is the first of three prototype iterations in Unity Engine done during my time with GIMM at Boise State University. It is a code-along
                                        project that I did for a school assignment. The creator of the content you see in this project is <a>Sebastian Graves</a> who now has
                                        a game on Steam with some of the very features found in this project. This is a good resource for learning Unity's capability and laid 
                                        the foundation for future Unity project design and implementation.
                                        <br />
                                        <br />
                                        <a href='https://github.com/havenfricke/Open-World-RPG-Prototype' target='_blank'>First Iteration Repository Link</a><br />
                                        <a href='https://github.com/havenfricke/Wary-Path' target='_blank'>Second Iteration Repository Link</a><br />
                                        <a href='' target='_blank'>Third Iteration Repository Link (Coming Soon)</a><br />
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/rpg_1.png"/>
                                        <LazyImage src="/Portfolio/rpg_2.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/rpg_3.png"/>
                                        <LazyImage src="/Portfolio/rpg_4.png"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/rpg_5.png"/>
                                        <LazyImage src="/Portfolio/rpg_6.png"/>
                                    </div>  
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/rpg_7.png"/>
                                        <LazyImage src="/Portfolio/rpg_8.png"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2-grid'>
                                        <LazyImage src="/Portfolio/rpg_9.png"/>
                                        <LazyImage src="/Portfolio/rpg_10.png"/>
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