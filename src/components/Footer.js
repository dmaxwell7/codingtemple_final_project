import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" alignItems= 'center'  px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '400px', height: '50px' }} />
    </Stack>
    <Typography variant="h5"  mt="20px" textAlign="center" pb="40px">D.R.M FITNESS!</Typography>
  </Box>
);

export default Footer;