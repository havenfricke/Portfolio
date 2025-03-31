import React, { useState } from 'react';

export default function MagicEightBall(){
    const fortunes = [
        "It is certain!",
        "It is decidedly so!",
        "Without a doubt!",
        "You may rely on it!",
        "Most likely!",
        "Outlook good!",
        "Yes!",
        "Signs point to yes!",
        "No doubt!",
        "Reply hazy, try later.",
        "Ask again later.",
        "Better not say now.",
        "Cannot predict now.",
        "Ask again.",
        "Don't count on it.",
        "My reply is no.",
        "Sources say no.",
        "Outlook not so good!",
        "Very doubtful."
      ];
    
      const [message, setMessage] = useState("");
    
      const getFortune = () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        setMessage(fortunes[randomIndex]);
      };
    return (
        <div className='magic-eight-ball'>
            <div>
                
                <div onClick={getFortune} id="ball_body">
                <div id="ball_window">
                    <div id="triangle_down">
                        <div id="message_container">
                            <p id="message">{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}