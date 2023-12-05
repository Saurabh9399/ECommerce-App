// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{position:"sticky",bottom:0,width:"100%"}}>
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} E-commerce App. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
