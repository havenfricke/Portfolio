import { observer } from 'mobx-react-lite';

function GameDevPage()
{

    return (
            <section className='card-view-page'>
                <div className="card-view-banner">
                    <h2><strong>Game <br/>Development</strong></h2> 
                </div>
                <div className="row">
                    <div className='info-card'>
                        <h3>2024 - 2026 Demo Reel</h3>
                        <hr />
                        <br />
                        <video controls src='https://drive.google.com/file/d/1zZNP2tAAU6c4ffiwAe5TSVqqha6AaFYj/view?usp=sharing' ></video>
                    </div>
                </div>  
            </section>
    )
}

export default observer(GameDevPage);