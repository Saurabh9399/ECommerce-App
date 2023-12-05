// src/components/Cart.js
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import {useSelector} from "react-redux"
import CartItemCard from './CartItemCard';

const Cart = () => {
  // Assuming you have a list of items in the cart
  const cartItems = useSelector((store)=> store.cart)

  return (
    <div>

      <Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <Grid container spacing={3}>
            {cartItems.map((item,i) => (
               <CartItemCard product={item} key={i}/>
            ))}
          </Grid>
        )}

        <Button variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
          Checkout
        </Button>
      </Container>

    </div>
  );
};

export default Cart;
