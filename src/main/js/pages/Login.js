import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, useNavigate, Link as LinkRouter } from "react-router-dom";

import {
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Grid,
  Link
} from "@mui/material";
import { validateEmail } from "../helpers";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false)

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
        <LinkRouter to="/boasvindas/restaurantes">
          <Link variant="body2">
            Não possui uma conta? Faça seu cadastro
          </Link>
        </LinkRouter>
      </Card>
    </Container>
  );
}
