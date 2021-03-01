import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, ListGroup} from 'react-bootstrap';
import SelectedPlayer from '../selectedPlayer/SelectedPlayer';

const Team = (props) => {
    const playerNo = props.addPlayer;
     const totalExpenses = playerNo.reduce((sum, player)=> sum + player.salary, 0)

    return (
        <div>
<Card style={{ width: '25rem' }}>
  <Card.Header><h1>Club Players Detail</h1></Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item> <h2>Selected Player: {playerNo.length}</h2></ListGroup.Item>
    <ListGroup.Item> {
playerNo.map( playerIdentity => <SelectedPlayer player = {playerIdentity} key={ playerIdentity.id}></SelectedPlayer>)

}</ListGroup.Item>
    <ListGroup.Item> <h5><strong>Total Expenses: ${totalExpenses} </strong>  </h5></ListGroup.Item>
  </ListGroup>
</Card>



        </div>
    );
};


export default Team;