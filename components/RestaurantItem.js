import React, { useMemo } from "react";
import { CardMedia, Card, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Donuts from "../assets/images/donuts.jpg";
import Fanta from "../assets/images/fanta.jpg";
import Misto from "../assets/images/misto.jpg";
import Pizza from "../assets/images/pizza.jpg";
import Sushi from "../assets/images/sushi.jpg";
import Frites from "../assets/images/frites.jpg";

import styles from "./RestaurantItem.module.css";

const randomImage = {
    0: Donuts,
    1: Fanta,
    2: Misto,
    3: Pizza,
    4: Sushi,
    5: Frites
}

export default function RestaurantItem({ store }) {
    const navigate = useNavigate();

    const goToStoreDetails = () => navigate(`/restaurantes/${store.id}`, { state: { store } })

    const chooseRandomImage = useMemo(() => {
        const randomNumber = Math.floor(Math.random() * 6);

        return randomImage[randomNumber]
    }, [])

    return (
        <Card onClick={goToStoreDetails} className={styles.card} >
            <CardMedia
                component="img"
                image={chooseRandomImage}
                style={{
                    aspectRatio: '3/2',
                }}
            />
            <Box>{store.name}</Box>
        </Card>
    )
}