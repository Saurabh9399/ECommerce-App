// ProductDetail.js
import React from 'react';
import { useSelector,useDispatch } from "react-redux"
import { Container, Typography, Button, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const dispatch = useDispatch(); // Assuming your product has an ID
  const product = useSelector(store => store.product.productDetail)
  // Fetch product details based on the productId (you can use React Query or other data fetching libraries)

 

  const handleAddToCart = () => {
    // Implement your logic for adding to the cart
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    // Implement your logic for buying now
  };

  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: '2rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardMedia component="img" alt={product.title} height="300" image={product.image} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<MonetizationOnIcon />}
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProductDetail;
