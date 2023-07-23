import React from "react";
import * as IconsCollection from '@mui/icons-material';
import { Typography, Link } from '@mui/material';

type IconName = keyof typeof IconsCollection;

interface LinkProps {
  icon: IconName;
  value: string;
  color?: string;
  link?: string;
}

export const LinkCustom = (props: LinkProps) => {
  const { icon, value, color, link } = props;

  const IconComponent = IconsCollection[icon];

  if (!IconComponent) {
    return <span>Error: Icon not found</span>;
  }

  return (
    <React.Fragment>
      <Link href={link} underline="none" sx={{ cursor: link ? 'pointer' : 'initial' }}>
        <Typography color="#00a9c2" display={'flex'} alignItems={'center'} marginLeft={'10%'}>
          <IconComponent fontSize="medium" htmlColor={color ? color : "#00a9c2"} sx={{ paddingRight: '5px' }} /> {value}
        </Typography>
      </Link>
    </React.Fragment >
  );
};
