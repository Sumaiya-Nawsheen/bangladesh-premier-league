import React from 'react';
import "./Player.css";
import {Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const {name, salary, img} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (

<div className="container-fluid d-flex flex-row mb-3 show-grid row-no-padding">
<Card className="mb-3" style={{color:"#000", width:"18rem"}}>
<Card.Img src={img}/> 
<Card.Body>
       <Card.Title>  <h2>{name} </h2> </Card.Title>
    <Card.Text>
      <p>Salary: ${salary}</p>
      </Card.Text>
      < Button variant="danger" onClick={()=> handleAddPlayer(props.player)}> Add Player</ Button>
      </Card.Body>
  </Card>
  </div> 
    );
};
          
export default Player;