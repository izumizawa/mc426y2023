import React from 'react';
import Formulario from "../components/Formulario";
import {Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {useNavigate, useLocation} from "react-router-dom";

export default function OrderConfirmation() {
    const navigate = useNavigate();
    const { car } = useLocation().state;

    return <>
        <header
            style={{background: '#7300E7'}}
        >
            <Toolbar>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                    <Typography variant="h2" noWrap component="div" color="#FFF">
                        Confirmação de Pedido
                    </Typography>
                    <Button onClick={() => navigate(-1)} style={{ background: '#FFF', color: "primary" }} >Voltar para o Inicio</Button>
                </div>
            </Toolbar>
        </header>
        <main style={{width: '70%', margin: '1.5rem auto'}}>
            <Typography variant='h2' >Resumo do Pedido:</Typography>
            <ul>
                {car && car.map(item => (
                    <li>
                        <h1>- {item.quantity}x {item.title}  R$ {item.price}</h1>
                    </li>
                ))}
            </ul>
            <Formulario />
        </main>
    </>
}