import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a>
        comú
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function RestaurantSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
              my: 8,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <StorefrontIcon sx={{ color: 'primary.main' }} />
            <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
              Cadastre seu restaurante
            </Typography>
            <Typography component="h1" variant="h6" sx={{ mt: 1 }}>
              E receba mais clientes pelo nosso app <i>comú</i>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  autoComplete="given-name"
                  name="restaurantName"
                  required
                  fullWidth
                  id="restaurantName"
                  label="Nome do restaurante"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="identityDocument"
                  required
                  fullWidth
                  id="identityDocument"
                  label="CNPJ"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="telephone"
                  required
                  fullWidth
                  id="telephone"
                  label="Telefone"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>               
                <TextField
                  margin="dense"
                  name="CEP"
                  required
                  fullWidth
                  id="CEP"
                  label="CEP do Brasil"
                  autoFocus
                />
              </Grid>            
              <Grid item xs={12}>                
                <TextField
                  margin="dense"
                  name="address"
                  required
                  fullWidth
                  id="address"
                  label="Endereço"
                  autoFocus
                />  
              </Grid>
              <Grid item xs={12} sm={4}>                         
                <TextField
                  margin="dense"
                  name="addressComplement"
                  required
                  fullWidth
                  id="addressComplement"
                  label="Complemento"
                  autoFocus
                /> 
              </Grid>              
              <Grid item xs={12} sm={4}>                
                <TextField
                  margin="dense"
                  name="state"
                  required
                  fullWidth
                  id="state"
                  label="Estado"
                  autoFocus
                />  
              </Grid>
              <Grid item xs={12} sm={4}>                         
                <TextField
                  margin="dense"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="Cidade"
                  autoFocus
                /> 
              </Grid>
              <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="terms" color="primary" required />}
                label="Aceito os termos de compromisso"
              />
              </Grid>
              <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
              >
                Cadastrar
              </Button>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Já possui uma conta? Faça login
                  </Link>
                </Grid>
              </Grid>
              </Grid>
              <Copyright sx={{ mt: 8 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}