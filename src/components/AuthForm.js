// src/components/AuthForm.js
import React, { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyDix-J_gSkNRTdla4-PpTMNTBzM5eIcUm0",
  authDomain: "ecommerce-app-a20aa.firebaseapp.com",
  projectId: "ecommerce-app-a20aa",
  storageBucket: "ecommerce-app-a20aa.appspot.com",
  messagingSenderId: "254401256519",
  appId: "1:254401256519:web:61ace9173c06f75501a562",
  measurementId: "G-C03WV9H2CJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
    validationSchema: Yup.object({
      name: !isLogin ? Yup.string().required("Required") : Yup.string(),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: !isLogin
        ? Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required")
        : Yup.string(),
      gender: !isLogin ? Yup.string().required("Required") : Yup.string(),
    }),
    onSubmit: async (values) => {
      // Handle login/signup logic here
      const auth = getAuth(firebaseApp);

      try {
        if (isLogin) {
          // Login
          const userCredential = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          const user = userCredential.user;
          dispatch(setUser(user));
          console.log("Login response", user);
        } else {
          // Signup
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          const user = userCredential.user;
          // Additional information (e.g., name, gender) can be updated here
          await userCredential.user?.updateProfile({
            displayName: values.name,
          });
          dispatch(setUser(user));
        }
        navigate("/");
        console.log(
          `${isLogin ? "Login" : "Signup"} successful with values:`,
          values
        );
      } catch (error) {
        console.error(`${isLogin ? "Login" : "Signup"} error:`, error.message);
      }
    },
  });

  return (
    <Container maxWidth="xs" sx={{ marginTop: "1rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        {isLogin ? "Login" : "Sign Up"}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {!isLogin && (
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            margin="normal"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            autoFocus={true}
          />
        )}

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        {!isLogin && (
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        )}

        {!isLogin && (
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              label="Gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormHelperText error>
              {formik.touched.gender && formik.errors.gender}
            </FormHelperText>
          </FormControl>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>

      <Typography variant="body2" align="center" style={{ marginTop: "1rem" }}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          href="#"
          onClick={() => {
            setIsLogin((prev) => !prev); // Toggle between login and signup modes
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </Link>
      </Typography>
    </Container>
  );
};

export default AuthForm;
