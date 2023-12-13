import React from "react";
import { Box } from "@mui/material";
import { LogoCustom } from "../Atoms/LogoCustom";
import { AvatarCustom } from "../Atoms/AvatarCustom";
import { Title } from "../Atoms/Title";
import { CallToAction } from "../Atoms/CallToAction";
import { QuoteCustom } from "../Atoms/QuoteCustom";
import { LinkCustom } from "../Atoms/LinkCustom";
import { Estatelink } from "../Atoms/Estatelink";
import { QrCodeCustom } from "../Atoms/QRCodeCustom";
import { Members } from "../Atoms/Members";

export const Jerome: React.FC = () => {
  return (
    <React.Fragment>
      <Box display={'flex'} justifyContent={'center'} mt={5} pt={5} pb={5}>
        <LogoCustom />
      </Box>
      <Box display={'flex'} justifyContent={'center'} >
        <AvatarCustom avatarSrc="jerome.jpg" />
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Title
          surname={'Jérôme'}
          name={'CARRARA'}
          position={'Agent Immobilier'}
        />
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <CallToAction phone={'tel:06.11.98.46.79'} />
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={3}>
        <QuoteCustom />
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} mt={2}>
        <LinkCustom icon="SmartphoneOutlined" value="06.11.98.46.79" />
        <LinkCustom icon="EmailOutlined" value="jerome@carrara.immo" />
        <LinkCustom icon="LinkedIn" value="LinkedIn" color="#0077B5" link="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-carrara-53259a8b/" />
        <LinkCustom icon="FacebookOutlined" value="Facebook" link="https://www.facebook.com/jerome.carrara57" />
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={3}>
        <Estatelink
          linkRealEstate="https://www.carrara.immo/vente/1"
          linkOpinions="https://maps.app.goo.gl/Mp9FrUey5SwaX87w9"
        />
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={3} mb={5}>
        <QrCodeCustom value="https://www.carrara.immo/" />
      </Box>
      <Box mt={5} mb={3}>
        <Members />
      </Box>
    </React.Fragment >
  )
}