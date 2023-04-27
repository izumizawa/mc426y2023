import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import {
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

// eslint-disable-next-line no-unused-vars,import/named
import { app } from "../config/firebase";

import { UserContext } from "../contexts/UserContext";
import { validateEmail } from "../helpers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const { loginWithEmail, login, loading } = useContext(UserContext);

  const handleBlur = () => {
    setEmailError(!validateEmail(email));
  };

  const handleSubmit = () => {
    loginWithEmail(email, password);
  };

  if (login) return <Navigate to="/dashboard" />;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h1" component="h2" sx={{ marginBottom: "1rem" }}>
            Login
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="E-mail"
                placeholder="E-mail"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                onBlur={handleBlur}
                error={emailError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                placeholder="Senha"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            Entrar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
