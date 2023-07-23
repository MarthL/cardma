import React from "react";
import { Container, Box } from "@mui/material";
import { LogoCustom } from "../Atoms/LogoCustom";
import { AvatarCustom } from "../Atoms/AvatarCustom";
import { Title } from "../Atoms/Title";
import { CallToAction } from "../Atoms/CallToAction";

export const Main = () => {
  const containerStyle = {
    borderRadius: '25px',
    background: 'linear-gradient(180deg, #BABABA 0%, #FFF 25.52%, #FFF 28.13%)'
  };
  return (
    <React.Fragment>
      <Container style={containerStyle}>
        <Box display={'flex'} justifyContent={'center'} mt={5} pt={5} pb={5}>
          <LogoCustom />
        </Box>
        <Box display={'flex'} justifyContent={'center'} >
          <AvatarCustom avatarSrc="testAvatar.png" />
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Title
            surname={'Martin'}
            name={'Aubertin'}
            position={'Développeur Web Fullstack'}
          />
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <CallToAction />
        </Box>
      </Container>
    </React.Fragment >
  )
};