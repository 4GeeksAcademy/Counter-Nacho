import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CardCount from "./Card";
import { Container } from "react-bootstrap";
//create your first component
const Home = () => {
  return (
    <>
      <Container>
        <CardCount />
      </Container>
    </>
  );
};

export default Home;
