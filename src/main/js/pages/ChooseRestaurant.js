import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseRestaurant() {
    const navigate = useNavigate();

    return (<>
        <h1>Selecione um restaurante</h1>
        <button onClick={() => navigate('/boasvindas/restaurantes')} >Sou de um restaurante</button>
    </>)
}