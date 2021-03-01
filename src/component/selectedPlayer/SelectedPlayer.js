import React from 'react';
import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const SelectedPlayer = (props) => {
    const {name, salary, img} = props.player;
    return (
        <div className="container-fluid d-flex flex-row mb-3 show-grid row-no-padding">
        <Card className="mb-3" style={{color:"#000", width:"18rem" ,backgroundColor:"rgbA(255, 230, 230,0.5)"}}>
        <Container>
  <Row>
  <Col xs={6} md={4}>
      <Image style={{width:"15rem"}} src={img} roundedCircle />
    </Col>
  </Row>
      </Container>  
       
        <Card.Body>
               <Card.Title>  <h2>{name} </h2> </Card.Title>
            <Card.Text>
              <p>Salary: ${salary}</p>
              </Card.Text>
              </Card.Body>
          </Card>
          </div> 
    );
};

export default SelectedPlayer;