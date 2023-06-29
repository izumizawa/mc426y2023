import React, { useState } from 'react';
import {TextField, Button, Typography, Alert} from '@mui/material';
import {useNavigate} from "react-router-dom";

function Formulario() {
    const navigate = useNavigate();
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [sendOrder, setSendOrder] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setCep('');
        setEndereco('');
        setNumero('');
        setBairro('');
        setComplemento('');

        setSendOrder(true);

        setTimeout(() => {
            setSendOrder(false);
            navigate('/')
        }, 3000)

    };

    return (
        <form onSubmit={handleSubmit} style={{marginTop: '2rem'}}>
            { sendOrder && <Alert>Pedido Feito com Sucesso!</Alert>
            }
            <Typography variant='h2' >Preencha seu Endereço:</Typography>

            <TextField
                label="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Enviar
            </Button>
        </form>
    );
}

export default Formulario;
