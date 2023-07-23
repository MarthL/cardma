import React from "react"
import { Typography, Link, Box } from "@mui/material"

interface EstateLinkProps {
  linkRealEstate: string;
  linkOpinions: string;
}

export const Estatelink = (props: EstateLinkProps) => {
  const { linkRealEstate, linkOpinions } = props;
  return (
    <React.Fragment>
      <Box display={'flex'} flexDirection={'column'} textAlign={'center'} justifyContent={'center'}>
        <Link href={linkRealEstate} underline="none">
          <Typography variant="h5" color="#00a9c2" fontWeight={'bold'}>
            Mes biens à vendre
          </Typography>
        </Link>

        <Link href={linkOpinions} underline="none">
          <Typography variant="h5" color="#00a9c2" fontWeight={'bold'}>
            Mes avis clients
          </Typography>
        </Link>
      </Box>
    </React.Fragment>
  )
}