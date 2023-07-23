import React from "react";
import { Button } from "@mui/material";
import { AddToHomeScreen } from '@mui/icons-material';

export const CallToAction = () => {
  return (
    <React.Fragment>
      <Button
        fullWidth
        variant="contained"
        sx={{ fontWeight: 'bold' }}
        startIcon={<AddToHomeScreen />}
      >
        AJOUTER AU REPERTOIRE
      </Button>
    </React.Fragment >
  )
};