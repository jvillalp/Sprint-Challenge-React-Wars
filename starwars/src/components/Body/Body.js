import React from "react";
// import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Col
} from "reactstrap";

const Navstyle = styled.nav`
background: #6B8E23;
color: white;
padding: 2%;
display: flex;
align-items: center;
flex-wrap: wrap;
`;

const Body = props => {
  return (
      
    <Col xs="6" md="4" xl="2">

      <Card body outline color="success">
          <Navstyle>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Height: {props.height} cm</CardText>
          <CardText>Mass {props.mass}</CardText>
          <CardText>Birth Year: {props.birthYear}</CardText>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </CardBody>
        </Navstyle>
      </Card>
    </Col>
   
  );
};

export default Body;
