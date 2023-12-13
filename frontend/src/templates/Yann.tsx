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

export const Yann: React.FC = () => {
  return (
    <React.Fragment>
      <Box display={'flex'} justifyContent={'center'} mt={5} pt={5} pb={5}>
        <LogoCustom />
      </Box>
      <Box display={'flex'} justifyContent={'center'} >
        <AvatarCustom avatarSrc="yann.jpg" />
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Title
          surname={'Yann'}
          name={'MORVAN'}
          position={'Conseiller Immobilier'}
        />
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <CallToAction phone={'tel:06.65.15.02.78'} />
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={3}>
        <QuoteCustom />
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} mt={2}>
        <LinkCustom icon="SmartphoneOutlined" value="06.65.15.02.78" />
        <LinkCustom icon="PhoneOutlined" value="03.87.69.1000" />
        <LinkCustom icon="EmailOutlined" value="yann@carrara.immo" />
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