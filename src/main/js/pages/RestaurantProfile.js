import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
import Typography from '@mui/material/Typography';
import { editStore, getStoreByEmail } from "../services/store";
import {useLocalStorage} from "../hooks/UseLocalStorage";

export default function RestaurantProfile() {
    const [name, setName] = useState("");

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

    const [error, setError] = useState(null);

    const [dataUser, setDataUser] = useLocalStorage('dataUser', "")
    console.log(dataUser)
    const { email, storeId } = dataUser;
    
    const handlePasswordBlur = () => {
        setPasswordError((password === passwordConfirmation) ? false : true)
    }
    
    const updateData = async () => {
        setName(dataUser.name);
        setAddress(dataUser.address);
        setPassword(dataUser.password);
        setPasswordConfirmation(dataUser.password);
        setIdentityDocument(dataUser.identityDocument);
        setTelephone(dataUser.telephone);
        setZipCode(dataUser.zipCode);
        setAddressNumber(dataUser.addressNumber);
        setAddressComplement(dataUser.addressComplement);
        setAddressState(dataUser.addressState);
        setAddressCity(dataUser.addressCity);
        // await getStoreByEmail(email).then(e => {
        //     setDataUser(e)
        // })
    }

    useEffect(() => {
        updateData();
    }, [])
    

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
        
        store.addressComplement = addressComplement;
        
        console.log(store)
        await editStore(storeId, store)
          .then()

      };

    return (
        <Grid>
            <AppBar />
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
            <Typography component="h1" variant="h1" sx={{ mt: 1 }}>
              Meu Cadastro
            </Typography>
            <Typography component="h1" variant="h6" sx={{ mt: 1 }}>
              Verifique ou atualize os dados de seu restaurante
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
                <TextField
                margin="dense"
                name="restaurantName"
                required
                fullWidth
                id="restaurantName"
                label="Nome do restaurante"
                value={name}
                onChange={({ target }) => setName(target.value)}
                />
                <TextField
                margin="dense"
                autoComplete="email"
                disabled
                fullWidth
                label="E-mail"
                helperText="Não é possível alterar o e-mail cadastrado."
                value={email}
                />
                <TextField
                margin="dense"
                required
                fullWidth
                label="Senha"
                value={password}
                type="password"
                onChange={({ target }) => setPassword(target.value)}
                />
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
                <TextField
                margin="dense"
                fullWidth
                disabled
                label="CNPJ"
                helperText="Não é possível alterar CNPJ cadastrado."
                value={identityDocument}
                onChange={({ target }) => setIdentityDocument(target.value)}
                />
                <TextField
                margin="dense"
                required
                fullWidth
                label="Telefone"
                value={telephone}
                onChange={({ target }) => setTelephone(target.value)}
                />
                <Typography component="h1" variant="h2" sx={{ mt: 2 }}>
                    Endereço
                </Typography>
                <TextField
                margin="dense"
                required
                fullWidth
                label="CEP do Brasil"
                value={zipCode}
                onChange={({ target }) => setZipCode(target.value)}
                />
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
                <TextField
                margin="dense"
                required
                fullWidth
                label="Número"
                value={addressNumber}
                onChange={({ target }) => setAddressNumber(target.value)}
                />
                <TextField
                margin="dense"
                name="addressComplement"
                fullWidth
                id="addressComplement"
                label="Complemento"
                value={addressComplement}
                onChange={({ target }) => setAddressComplement(target.value)}
                />
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
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Salvar alterações
                  </Button>
                </Grid>
            </Box>
            </Box>
        </Grid>
    );
}
