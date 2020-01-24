import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import styled from "styled-components";
import { Container, Row } from "reactstrap";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";

const AppStyle = styled.div`
  background-image: url("./sw-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  padding: 2%;
`;

// const BodyCon = styled.div`
// margin: 0%;
// `;

const App = () => {
  const [starWarsChars, setStarWarsChars] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setStarWarsChars(response.data.results);
      })
      .catch(error => {
        console.log("Did not fetch data", error);
      });
  });

  return (
    <AppStyle>
      <Header />
      <Container>
        <Row>
          {/* <BodyCon> */}
          {starWarsChars.map(starWarsChar => {
            return (
              <Body
                key={uuid()}
                name={starWarsChar.name}
                gender={starWarsChar.gender}
                height={starWarsChar.height}
                mass={starWarsChar.mass}
                birthYear={starWarsChar.birth_year}
              />
            );
          })}
          {/* </BodyCon> */}
        </Row>
      </Container>
    </AppStyle>
  );
};

export default App;
