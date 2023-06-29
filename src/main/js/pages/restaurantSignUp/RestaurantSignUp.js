import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from "@mui/material/Alert";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validateEmail } from "../../helpers";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate, Link as LinkRouter } from "react-router-dom";
import Copyright from "../../components/Copyright";
import { addStore } from "../../services/store";

const theme = createTheme();

const hasFullFilledForm = (form) => {
  for (let key in form) {
    if (!form[key]) {
      return false;
    }
  }
  return true;
}

export default function RestaurantSignUp() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [identityDocument, setIdentityDocument] = useState("");
  const [telephone, setTelephone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState(null);

  const handleEmailBlur = () => {
    setEmailError(!validateEmail(email))
  }

  const handlePasswordBlur = () => {
    setPasswordError((password === passwordConfirmation) ? false : true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const store = {
      name: name,
      email: email,
      identityDocument: identityDocument,
      telephone: telephone,
      zipCode: zipCode,
      address: address,
      addressNumber: addressNumber,
      addressState: addressState,
      addressCity: addressCity
    }

    if (!hasFullFilledForm(store)) {
      setError('Preencha os Campos Obrigatórios!')
      setTimeout(() => { setError(null) }, 2500)
      return
    }

    store.addressComplement = addressComplement;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addStore(store);
        navigate("/login")
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => { setError(null) }, 2500)
      })
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
            {error && <Alert severity="error">{error}</Alert>}

            <StorefrontIcon sx={{ color: 'primary.main' }} />
            <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
              Cadastre seu restaurante
            </Typography>
            <Typography component="h1" variant="h6" sx={{ mt: 1 }}>
              E receba mais clientes pelo nosso app <i>comú</i>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    name="restaurantName"
                    required
                    fullWidth
                    id="restaurantName"
                    label="Nome do restaurante"
                    autoFocus
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    autoComplete="email"
                    required
                    fullWidth
                    label="E-mail"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    onBlur={handleEmailBlur}
                    error={emailError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    label="Senha"
                    value={password}
                    type="password"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    label="Confirme sua senha"
                    value={passwordConfirmation}
                    type="password"
                    onChange={({ target }) => setPasswordConfirmation(target.value)}
                    onBlur={handlePasswordBlur}
                    error={passwordError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    label="CNPJ"
                    value={identityDocument}
                    onChange={({ target }) => setIdentityDocument(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    label="Telefone"
                    value={telephone}
                    onChange={({ target }) => setTelephone(target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    label="CEP do Brasil"
                    value={zipCode}
                    onChange={({ target }) => setZipCode(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    margin="dense"
                    name="address"
                    required
                    fullWidth
                    id="address"
                    label="Endereço"
                    value={address}
                    onChange={({ target }) => setAddress(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    label="Número"
                    value={addressNumber}
                    onChange={({ target }) => setAddressNumber(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    name="addressComplement"
                    fullWidth
                    id="addressComplement"
                    label="Complemento"
                    value={addressComplement}
                    onChange={({ target }) => setAddressComplement(target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    margin="dense"
                    name="state"
                    required
                    fullWidth
                    id="state"
                    label="Estado"
                    value={addressState}
                    onChange={({ target }) => setAddressState(target.value)}
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
                    value={addressCity}
                    onChange={({ target }) => setAddressCity(target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="terms" color="primary" required />}
                    label="Aceito os termos de compromisso"
                    checked={termsAccepted}
                    onChange={({ target }) => setTermsAccepted(target.value)}
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
                    <LinkRouter to="/login">
                      <Link variant="body2">
                        Já possui uma conta? Faça login
                      </Link>
                    </LinkRouter>
                  </Grid>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 4 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}