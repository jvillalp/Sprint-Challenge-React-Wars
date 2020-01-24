import React from "react";
// import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col
} from "reactstrap";

const Cardstyle = styled.nav`
background: #6B8E23;
color: white;
padding: 2%;
display: flex;
align-items: center;
flex-wrap: wrap;
`;

const CardChar = styled.div`
display:flex
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;

const Body = props => {
  return (
      
    <Col xs="12" md="6" xl="3">

      <Card CardChar body outline color="success">
          <Cardstyle>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Height: {props.height} cm</CardText>
          <CardText>Mass: {props.mass} kg</CardText>
          <CardText>Birth Year: {props.birthYear}</CardText>
        </CardBody>
        </Cardstyle>
      </Card>
    </Col>
   
  );
};

export default Body;
