'use client';

import { ReactElement } from 'react';
import { Typography } from '@mui/material';
import StyledCopyright from './copyright.styled';

const Copyright = (): ReactElement => (
  <StyledCopyright data-testid="copyright-container">
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
    </Typography>
  </StyledCopyright>
);
export default Copyright;
