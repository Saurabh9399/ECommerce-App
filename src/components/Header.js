// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Badge, Button, TextField, Box, SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import Logout from './LogoutComponent';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { searchResult } from '../redux/productsSlice';

// Custom Material-UI logo component
const MaterialUILogo = (props) => (
  <SvgIcon {...props}>
    {/* Material-UI logo path */}
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.502 15.648a.635.635 0 0 1 0-1.27H5.498a.635.635 0 0 1 0 1.27h2.206v2.206a.635.635 0 1 1-1.27 0V7.94a.635.635 0 1 1 1.27 0v2.206h6.342a.635.635 0 1 1 0 1.27h-2.206V18.06a.635.635 0 0 1 1.27 0v-2.206h2.206z" />
  </SvgIcon>
);

const Header = () => {
  const user = useSelector(store => store.auth.user);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = ({val}) => {
    setSearchText(val);
    // Implement your search logic here (e.g., filter products based on searchText)
     dispatch(searchResult(val));
  };

 

  return (
    <AppBar position="static" sx={{ background: '#2196F3' }}>
      <Toolbar>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
          <MaterialUILogo sx={{ marginRight: '8px', fontSize: '2rem' }} />
          <Typography variant="h6" component="div">
            MyStore
          </Typography>
        </Box>

        {/* Search Box */}
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e)=>handleSearchChange(e.target.value)}
          sx={{ marginLeft: 'auto', marginRight: 2, background: '#fff', borderRadius: '4px' }}
          InputProps={{
            endAdornment: (
              <SearchIcon sx={{ color: '#757575' }} />
            ),
          }}
        />

        <Button component={Link} to="/cart" color="inherit" sx={{ textDecoration: 'none', marginLeft: 2 }}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon sx={{ marginRight: 1, color: '#fff' }} />
          </Badge>
        </Button>

        {user && <Logout />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
