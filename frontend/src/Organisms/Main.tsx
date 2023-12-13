import React from "react";
import { Container } from "@mui/material";
import { Jerome } from "../templates/Jerome";
import { Yann } from "../templates/Yann";
import { useLocation } from "react-router-dom";


export const Main = () => {
  const containerStyle = {
    borderRadius: '25px',
    background: 'linear-gradient(180deg, rgba(186, 186, 186, 0.8) 0%, rgba(255, 255, 255, 0.8) 25.52%, rgba(255, 255, 255, 0.8) 28.13%)',
    maxWidth: '400px',
    color: '#000'
  };

  const location = useLocation();

  if (location.pathname === '/jerome') {

    return (
      <React.Fragment>
        <Container style={containerStyle}>
          <Jerome />
        </Container>
      </React.Fragment >
    )

  } else if (location.pathname === "/yann") {
    return (
      <React.Fragment>
        <Container style={containerStyle}>
          <Yann />
        </Container>
      </React.Fragment >
    )
  }
  else {
    return (
      <></>
    )
  }

};