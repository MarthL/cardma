import React from "react";
import { Button } from "@mui/material";
import { AddToHomeScreen } from '@mui/icons-material';

interface CallToActionProps {
  phone: string;
}

export const CallToAction = (props: CallToActionProps) => {

  const { phone } = props;

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        href={phone}
        sx={{ fontWeight: 'bold', backgroundColor: 'white', color: '#00628c' }}
        startIcon={<AddToHomeScreen />}
      >
        AJOUTER AU REPERTOIRE
      </Button>
    </React.Fragment >
  )
};