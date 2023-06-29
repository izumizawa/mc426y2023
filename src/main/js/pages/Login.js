import React, {useState, useContext} from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {UserContext} from "../contexts/UserContext";
import {Navigate, Link as LinkRouter} from "react-router-dom";
import Copyright from "../components/Copyright";

import {
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Link,
  Paper,
} from "@mui/material";
import {validateEmail} from "../helpers";

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const {loginWithEmail, login, loading} = useContext(UserContext);

  const handleBlur = () => {
    setEmailError(!validateEmail(email));
  };

  const handleSubmit = () => {
    loginWithEmail(email, password);
  };

  if (login) return <Navigate to="/pedidos" />;

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{height: "100vh"}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 40,
              mx: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}>
            <StorefrontIcon sx={{color: "primary.main"}} />
            <Typography component="h1" variant="h4" sx={{my: 1}}>
              Login
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{width: "100%"}}
                  label="E-mail"
                  placeholder="E-mail"
                  value={email}
                  onChange={({target}) => setEmail(target.value)}
                  onBlur={handleBlur}
                  error={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{width: "100%"}}
                  placeholder="Senha"
                  value={password}
                  onChange={({target}) => setPassword(target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                sx={{my: 2}}
                fullWidth>
                Entrar
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRouter to="/cadastro/restaurantes">
                  <Link variant="body2">
                    Não possui uma conta? Faça seu cadastro
                  </Link>
                </LinkRouter>
              </Grid>
            </Grid>
            <Copyright sx={{mt: 2}} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
