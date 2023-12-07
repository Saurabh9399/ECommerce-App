// src/components/Home.js
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import ProductCard from "./ProductCard";
import { setItems } from "../redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", fetchProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(setItems(products));
  },[products])

  const productsData = useSelector(store =>store.products.items);


  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        {isLoading && <CircularProgress />}
      </div>
    );
  }

  if (isError) {
    return <Typography variant="h6">Error fetching products</Typography>;
  }

  return (
    <Container sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to E-commerce App
      </Typography>

      <Grid container spacing={3}>
        {productsData?.map((product,i) => (
          <ProductCard product={product} key={i}/>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
