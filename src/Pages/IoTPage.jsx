import { observer } from "mobx-react-lite";
import LazyImage from "../Components/LazyImage";
import ModalWindow from "../Components/ModalWindow";
import MarkdownFile from "../Components/MarkdownFile";


function IoTPage()
{

    return (
        <section className='card-view-page'>
            <div className="card-view-banner">
                <h2><strong>IoT<br /> Development</strong></h2> 
            </div>
            <div className="row">
                <div className="col-2-grid">
                    <div className="info-card">
                        <h3>
                            <a href="https://unity.com/">Unity Engine</a> + <a>Arduino</a> Joystick Input
                        </h3>
                        <hr />
                        <div className="img-wrapper">
                            <LazyImage src="" />
                        </div>
    
                        <ModalWindow title={"Unity Engine + Arduino Joystick Input"}>
                            <div className='row'>
                                <p>
                                    Arduino Uno joystick input circuit interoperability with Unity Game Engine. The circuit is designed to be easily integrated into any Unity project and can be used to control game objects in real-time. 
                                    This project is designed to be easily modified and expanded upon, making it a great starting point for anyone looking to integrate Arduino joystick input into their Unity projects.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/ArduinoUnityInputModule" target="_blank">Github Repository Link</a>.
                                </p>
                            </div>
                            <div className="row">
                                <MarkdownFile src="https://raw.githubusercontent.com/havenfricke/ArduinoUnityInputModule/refs/heads/main/README.md" className="modal-markdown"/>
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="" />
                                    <LazyImage src="" />
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-2-grid'>
                                    <LazyImage src="" />
                                    <LazyImage src="" />                        
                                </div>
                            </div>
                        </ModalWindow>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default observer(IoTPage);