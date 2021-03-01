import React from 'react';
import Player from '../Player/Player';

const Team = (props) => {
    const playerNo = props.addPlayer;

     let totalExpenses = playerNo.reduce((sum, player)=> sum + player.salary, 0)

    return (
        <div>
           <h1>Club Players Detail</h1>
           <h3>Selected Player: {playerNo.length}</h3>
           {/* {
          playerNo.map( playerIdentity => <p>{playerIdentity.name}</p>)
           } */}
{
playerNo.map( playerIdentity => <Player player = {playerIdentity} key={ playerIdentity.id}></Player>)

}

           <p> Total Expences: ${totalExpenses} </p>
        </div>
    );
};

export default Team;