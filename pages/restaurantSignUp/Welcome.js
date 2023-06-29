import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkRouter } from "react-router-dom";
import Copyright from '../../components/Copyright';
import theme from "../../theme";

export default function Welcome() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 40,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <StorefrontIcon sx={{ color: 'primary.main' }} />
            <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
              Seja bem-vindo ao Comú!
            </Typography>
            <Typography component="h1" variant="h6" sx={{ mt: 1 }}>
              Conheça nossa plataforma e faça parte
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <LinkRouter to="/cadastro/restaurantes">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mb: 2 }}
                    >
                      Quero me cadastrar
                    </Button>
                  </LinkRouter>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="p" variant="h7" sx={{ mb: 1 }}>
                    Já possui conta?
                  </Typography>                  
                  <LinkRouter to="/login">
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{ mb: 2 }}
                    >
                      Ir para o login
                    </Button>
                  </LinkRouter>
                </Grid>
              </Grid>
              <Copyright/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}