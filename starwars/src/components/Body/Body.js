import React from "react";
// import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

const Cardstyle = styled.nav`
  // background: #6b8e23;
  // color: white;
  border: 2px dotted white;
  padding: 1%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

// const CardChar = styled.div`
//   display:flex
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 50%;
// `;

const Body = props => {
  return (
    <Col xs="12" md="6" xl="3">
      <Card body className="text-center" outline color="danger" inverse style={{ backgroundColor: '#2E8B57', borderColor: 'FFF8DC', opacity: 0.7}}>
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
