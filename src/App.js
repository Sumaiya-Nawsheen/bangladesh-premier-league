
import { useEffect, useState } from 'react';
import Player from './component/Player/Player';
import Team from './component/Team/Team';
import playersData from './data/data.json';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]); 
  useEffect(() => {
    setPlayers(playersData)
  },[])
  const handleAddPlayer = (addedPlayer) => {
    const newPlayer = [...addPlayer,addedPlayer ];
    setAddPlayer(newPlayer);
  }
  return (
    <div className="App">
      <h1>Bangladesh Premier League</h1>
      <div>
      <Team addPlayer={addPlayer} ></Team>
      </div>
      <div>
      {
players.map( player => <Player player = {player} key={player.id} handleAddPlayer={handleAddPlayer}></Player>)
      }
      </div>  
    </div>
  );
}

export default App;
