// 'use client';

// import { styled } from 'styled-components';

// export const StyledMainContainer = styled.main`
//   width: 100%;
//   padding: 50px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   min-height: 100vh;
//   h1 {
//     font-size: 50px;
//     text-align: center;
//   }
// `;

// export default StyledMainContainer;

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
