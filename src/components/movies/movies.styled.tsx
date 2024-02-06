'use client';

import { styled } from 'styled-components';

export const StyledMoviesContainer = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  .MuiCardMedia-root {
    background-position: top;
  }
`;

export default StyledMoviesContainer;
