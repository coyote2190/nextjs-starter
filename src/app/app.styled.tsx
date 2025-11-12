'use client';

import { styled } from '@mui/system';

export const StyledMainContent = styled('main')`
  flex-grow: 1;
`;

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
`;

export default StyledMainContent;
