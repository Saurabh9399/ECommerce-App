// src/components/Home.js
import React from 'react';
import { useQuery } from 'react-query';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  CardMedia,
} from '@mui/material';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const Home = () => {
  const { data: products, isLoading, isError } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant="h6">Error fetching products</Typography>;
  }

  return (
    <Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to E-commerce App
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
