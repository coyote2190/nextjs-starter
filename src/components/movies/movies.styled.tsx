'use client';

import { styled } from '@mui/system';

export const StyledMoviesContainer = styled('section')`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  .MuiCardMedia-root {
    background-position: top;
  }
`;

export default StyledMoviesContainer;
