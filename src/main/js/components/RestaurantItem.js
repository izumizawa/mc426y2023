import React from "react";
import { CardMedia, Card, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Donuts from "../assets/images/donuts.jpg";

export default function RestaurantItem({ store }) {
    const navigate = useNavigate();

    const goToStoreDetails = () => navigate(`/restaurantes/${store.id}`)

    return (
        <Card onClick={goToStoreDetails} style={{ margin: '1rem', maxWidth: '200px' }} >
            <CardMedia
                component="img"
                image={Donuts}
            />
            <Box>{store.name}</Box>
        </Card>
    )
}