import React from "react";
import { Container, Box } from "@mui/material";
import { LogoCustom } from "../Atoms/LogoCustom";
import { AvatarCustom } from "../Atoms/AvatarCustom";
import { Title } from "../Atoms/Title";
import { CallToAction } from "../Atoms/CallToAction";
import { QuoteCustom } from "../Atoms/QuoteCustom";
import { LinkCustom } from "../Atoms/LinkCustom";
import { Estatelink } from "../Atoms/Estatelink";
import { QrCodeCustom } from "../Atoms/QRCodeCustom";
import { Members } from "../Atoms/Members";

export const Main = () => {
  const containerStyle = {
    borderRadius: '25px',
    background: 'linear-gradient(180deg, rgba(186, 186, 186, 0.8) 0%, rgba(255, 255, 255, 0.8) 25.52%, rgba(255, 255, 255, 0.8) 28.13%)',
    maxWidth: '400px',
    color: '#000'
  };
  return (
    <React.Fragment>
      <Container
        style={containerStyle}
      >
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
        <Box display={'flex'} justifyContent={'center'} mt={3}>
          <QuoteCustom />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={2} mt={2}>
          <LinkCustom icon="SmartphoneOutlined" value="06.20.36.34.32" />
          <LinkCustom icon="EmailOutlined" value="martin.aubertin@gmail.com" />
          <LinkCustom icon="LinkedIn" value="LinkedIn" color="#0077B5" link="https://www.linkedin.com/in/martin-aubertin-webdev/" />
          <LinkCustom icon="Twitter" value="Twitter" color="#55ACEE" />
          <LinkCustom icon="YouTube" value="Youtube" color="red" />
          <LinkCustom icon="Instagram" value="Instagram" color="#DD2A7B" />
          <LinkCustom icon="FacebookOutlined" value="Facebook" />
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={3}>
          <Estatelink
            linkRealEstate="https://www.google.com"
            linkOpinions="https://www.google.com"
          />
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={3} mb={5}>
          <QrCodeCustom value="https://www.google.com" />
        </Box>
        <Box mt={5} mb={3}>
          <Members />
        </Box>

      </Container>
    </React.Fragment >
  )
};