import React from 'react';
import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';

const TemplateMain = () => (
  <Container
    sx={{
      // paddingY: '40px',
      // '@media (max-width: 960px)': {
      //   paddingY: '20px',
      //   paddingX: '12px',
      // },
      // '@media (max-width: 540px)': {
      //   paddingY: '0px',
      //   paddingX: '6px',
      // },
      // border: '1px solid rgb(255, 0, 25)',

      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '60px',
    }}
  >
    {/* <Box
      sx={
        {
          border: '1px solid grey',
          paddingY: '60px',
          '@media (max-width: 960px)': {
            paddingY: '40px',
          },
        }
      }
    > */}
    <Outlet />
    {/* </Box> */}
  </Container>
);

export default TemplateMain;
