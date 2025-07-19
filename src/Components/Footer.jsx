import React from 'react';
import { Box, Container, Typography, } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center',padding: '20px 0', marginTop: 'auto' }}>
      <Container maxWidth="lg">


       <Typography variant="body2">
            &copy; 2023 Ing. Romero
          </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
