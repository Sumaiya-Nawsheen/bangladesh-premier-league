import React from 'react';
import "./Player.css";
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, salary, img} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
    <div>
<Card className="mb-3" style={{width:"18rem" , border:"1px solid lightGrey" , backgroundColor:"rgbA(255, 230, 230,0.5)"}}>
<Card.Body>
<Card.Img src={img}/> 
       <Card.Title>  <h2>{name} </h2> </Card.Title>
    <Card.Text>
      <p>Salary: ${salary}</p>
      </Card.Text>
      < Button variant="danger" onClick={()=> handleAddPlayer(props.player)}><FontAwesomeIcon icon={faArrowAltCircleRight} /> Add Player</ Button>
      </Card.Body>
</Card>

 </div> 
    );
};
          
export default Player;