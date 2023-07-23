import React from 'react';
import { Avatar } from '@mui/material';

interface AvatarProps {
  avatarSrc: string;
}

export const AvatarCustom = (props: AvatarProps) => {
  const { avatarSrc } = props;
  return (
    <React.Fragment>
      <Avatar src={avatarSrc} sx={{ height: '200px', width: '200px' }} />
    </React.Fragment>
  )
};