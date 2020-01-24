import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px #fff;
  text-align: center;
  padding: 1%;
`;

const Header = () => {
  return (
    <div className="header">
      <Title>React Wars</Title>
    </div>
  );
};
export default Header;
