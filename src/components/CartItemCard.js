import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/cartSlice';

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
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price }));
  };

  return (
    <StyledCard>
      <StyledCardMedia component="img" alt={product.title} image={product.image} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {product.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
        <IconButton onClick={handleRemoveFromCart}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={handleAddToCart}>
          <AddIcon />
        </IconButton>
      </CardContent>
    </StyledCard>
  );
};

export default CartItemCard;
