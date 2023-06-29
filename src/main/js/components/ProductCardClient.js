import React from "react";
import { Card, Typography, Box, Button } from '@mui/material';

export default function ProductCardClient({ title, description, category, price, id, car, setCar }) {
    const addProductToCar = () => {
        const alreadyExist = car.find(item => item.id === id);

        if (alreadyExist) {
            const newCar = car.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
            setCar(newCar);
        } else {
            const newProduct = { title, description, category, price, id, quantity: 1 }
            setCar([...car, newProduct]);
        }
    }

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', width: "600px", margin: '0.5rem auto', padding: '1.5rem' }}>
            <Box sx={{ display: "flex", flexDirection: 'column' }}>
                <Typography variant="h2" color="primary">{title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
                    <Typography variant="subtitle1" > Descrição:</Typography>
                    <Typography variant="subtitle2">{description}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
                    <Typography variant="subtitle1">Categoria:</Typography>
                    <Typography variant="subtitle2">{category}</Typography>
                </Box>
                <Typography variant="overline" color="primary">R$ {price}</Typography>
            </Box>
            <Box>
                <Button onClick={addProductToCar} >Adicionar ao Carrinho</Button>
            </Box>
        </Card>
    )
}