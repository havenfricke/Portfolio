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

                    <div className="info-card">
                        <h3>
                            <a href="https://www.arduino.cc/" target="_blank">Arduino</a>: RD-03E mmWave Human Detection
                        </h3>
                        <hr />
                        <div className="img-wrapper">
                            <LazyImage src="" />
                        </div>
    
                        <ModalWindow title={"Arduino: RD-03E mmWave Human Detection"}>
                            <div className='row'>
                                <p>
                                    This project utilizes the RD-03E mmWave sensor with an Arduino Uno WiFi R2 to detect human presence and movement. 
                                    The RD-03E sensor uses millimeter-wave technology to accurately sense motion and distance, making it ideal for applications such as security systems, 
                                    occupancy detection, and smart home automation.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/rd-03e_human_detection_arduino_uno_wifi_r2" target="_blank">Github Repository Link</a>
                                </p>
                            </div>
                            <div className="row">
                                <MarkdownFile src="https://raw.githubusercontent.com/havenfricke/rd-03e_human_detection_arduino_uno_wifi_r2/refs/heads/main/README.md" className="modal-markdown"/>
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

                    <div className="info-card">
                        <h3>
                            <a href="https://expressjs.com/" target="_blank">Express.js</a> + <a href="https://www.arduino.cc/" target="_blank">Arduino</a> Sensor Data to <a href="https://developer.amazon.com/en-US/alexa/alexa-skills-kit" target="_blank">Alexa Skill</a>
                        </h3>
                        <hr />
                        <div className="img-wrapper">
                            <LazyImage src="" />
                        </div>
    
                        <ModalWindow title={"Express.js Arduino Sensor Data to Alexa Skill"}>
                            <div className='row'>
                                <p>
                                    Prototype express.js application made to receive data from Arduino via microcontroller sensors and send data via Alexa Skill. A group project made in collaboration with other developers to prototype an IoT solution for smart home applications.
                                    The express.js application acts as a bridge between the Arduino Uno WiFi r2 microcontroller and the Alexa Skill, allowing users to receive real-time updates or control the devices using voice commands via Alexa Skills Kit.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/IoT_Production" target="_blank">Github Repository Link</a>
                                </p>
                            </div>
                            <div className="row">
                                <MarkdownFile src="https://raw.githubusercontent.com/havenfricke/IoT_Production/refs/heads/main/README.md" className="modal-markdown"/>
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

                    <div className="info-card">
                        <h3>
                            <a href="https://www.arduino.cc/" target="_blank">Arduino</a> Project Compilation
                        </h3>
                        <hr />
                        <div className="img-wrapper">
                            <LazyImage src="" />
                        </div>
    
                        <ModalWindow title={"Arduino Project Compilation"}>
                            <div className='row'>
                                <p>
                                    A compilation of basic Arduino code. This collection contains projects with basic I/O capabilities to 
                                    familiarize with the Arduino Uno r3 and act as a reference or starting point for future projects involving Arduino.
                                    <br />
                                    <br />
                                    <a href="https://github.com/havenfricke/Arduino-Project-Compilation" target="_blank">Github Repository Link</a>
                                </p>
                            </div>
                            <div className="row">
                                <MarkdownFile src="https://raw.githubusercontent.com/havenfricke/Arduino-Project-Compilation/refs/heads/main/README.md" className="modal-markdown"/>
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