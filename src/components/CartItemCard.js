import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const CartItemCard = ({ product }) => {
    console.log(product);
  return (
    <StyledCard>
      <StyledCardMedia component="img" alt={product.title} image={product.image} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}x
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CartItemCard;
