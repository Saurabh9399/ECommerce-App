// src/components/Cart.js
import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const Cart = () => {
  // Assuming you have a list of items in the cart
  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
    // Add more items as needed
  ];

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
            {cartItems.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Paper sx={{ padding: '1rem' }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">Price: ${item.price}</Typography>
                  <Typography variant="body1">Quantity: {item.quantity}</Typography>
                  {/* Add more details or actions as needed */}
                </Paper>
              </Grid>
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
