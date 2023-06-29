import React, { useEffect, useState } from 'react';
import Formulario from "../components/Formulario";
import {Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {useNavigate, useLocation} from "react-router-dom";
import { addOrder } from '../services/order';

export default function OrderConfirmation() {
    const navigate = useNavigate();
    const { car, store } = useLocation().state;

    const items = car.map(item => {
        return {
            id: Math.floor(Math.random() * 100),
            title: "" + item.quantity + "x " + item.title,
            obs: "",
            price: item.price
        }
    })

    const order = {
        number: Math.floor(Math.random() * 1000),
        timestamp: "19/06/2023 às 18h25",
        payment: "Crédito Mastercard",
        contact: "(19) 90101-0101",
        status: "Recebido",
        items: items,
        store: store.id,
        totalPrice: Number(items.map(i => i.price).reduce ((acc, cur) => acc + parseFloat(cur), 0)).toFixed(2)
    }

    const updateOrder = (address) => {
        order.address = address;
        addOrder(order);
    }

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
            <Formulario updateOrder={updateOrder} />
        </main>
    </>
}