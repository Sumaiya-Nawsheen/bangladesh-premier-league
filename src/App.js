
import { useEffect, useState } from 'react';
import Player from './component/Player/Player';
import playersData from './data/data.json';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData)
  })
  return (
    <div>
      {
players.map( player => <Player player = {player} key={player.id}></Player>)
      }
      
    </div>
  );
}

export default App;
