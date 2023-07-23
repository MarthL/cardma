import React from "react";
import * as IconsCollection from '@mui/icons-material';
import { Typography } from '@mui/material';

type IconName = keyof typeof IconsCollection;

interface LinkProps {
  icon: IconName;
  value: string;
}

export const LinkCustom = (props: LinkProps) => {
  const { icon, value } = props;
  const IconComponent = IconsCollection[icon];

  if (!IconComponent) {
    return <span>Error: Icon not found</span>;
  }

  return (
    <React.Fragment>
      <Typography color="#00a9c2" display={'flex'} alignItems={'center'}>
        <IconComponent fontSize="medium" sx={{ paddingRight: '5px' }} /> {value}
      </Typography>
    </React.Fragment>
  );
};
