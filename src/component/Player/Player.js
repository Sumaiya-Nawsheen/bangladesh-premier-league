import React from 'react';
import "./Player.css"

const Player = (props) => {
    const {name, salary, img} = props.player;
    return (
        <div className="player-container">
            <div className="player-detail">
            <div>
                <img src={img} alt=''/>
            </div>
            <div>
            <h2>{name} </h2>
            <p>${salary}</p>
            <button> Add Player</button>
            </div>
             </div>
           
        </div>
    );
};

export default Player;