import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { setClickedProductDetails } from '../redux/productSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleCardClick = (product) => {
    // Navigate to the "/product" path with the product ID
    dispatch(setClickedProductDetails(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <Grid item key={product.id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: 300,
          height: '400px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer', // Add cursor style for indicating clickability
        }}
        onClick={()=>handleCardClick(product)}
      >
        <CardMedia component="img" alt={product.title} height="140" image={product.image} />
        <CardContent sx={{ flex: '1', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <Typography variant="h6" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary">
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={(e) =>
            {
              e.stopPropagation();
              handleAddToCart(product)}
            }
          
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
