import React from "react";
import { Button } from "@mui/material";
import { AddToHomeScreen } from '@mui/icons-material';

export const CallToAction = () => {
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{ fontWeight: 'bold', backgroundColor: 'white', color: '#00628c' }}
        startIcon={<AddToHomeScreen />}
      >
        AJOUTER AU REPERTOIRE
      </Button>
    </React.Fragment >
  )
};