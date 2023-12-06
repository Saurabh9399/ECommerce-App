// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Badge, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logout from './LogoutComponent';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const user = useSelector(store => store.auth.user);
    const cart = useSelector(store => store.cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#fff', flexGrow: 1 }}>
          E-commerce App
        </Typography>
        <Button component={Link} to="/cart" color="inherit" sx={{ textDecoration: 'none', marginLeft: 2 }}>
        <Badge badgeContent={totalItems} color="error">
          <ShoppingCartIcon sx={{ marginRight: 1 }}/>
          </Badge>
        </Button>
       {user && <Logout />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
