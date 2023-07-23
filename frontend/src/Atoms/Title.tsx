import React from "react";
import { Typography, Box } from "@mui/material";

interface TitleProps {
  name: string;
  surname: string;
  position: string;
}

export const Title = (props: TitleProps) => {
  const { name, surname, position } = props;

  return (
    <React.Fragment>
      <Box display={'flex'} flexDirection={'column'} mt={2} mb={2}>
        <Box component={'div'}>
          <Typography variant="body1" color="#00628c" textAlign={'center'}>{surname} - {name}</Typography>
        </Box>
        <Box component={'div'}>
          <Typography variant="subtitle1" color="#00a9c2" textAlign={'center'}>{position}</Typography>
        </Box>
      </Box>
    </React.Fragment>
  )
}