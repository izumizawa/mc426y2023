import React, { useEffect, useState } from "react";
import { getAllStores } from "../services/store";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RestaurantItem from "../components/RestaurantItem";
import styles from "./RestaurantList.module.css"

export default function ChooseRestaurant() {
    const [stores, setStores] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await getAllStores();
            console.log(response);
            setStores(response)
        }

        fetchData()

    }, [])

    return (
        <div className={styles.container} >
            <Header search={search} setSearch={setSearch} />
            <main className={styles.main}>
                <h1 className={styles.title} >Selecione um restaurante</h1>

                <div className={styles.storesList}>
                    {stores.map((store, key) => (
                        <RestaurantItem store={store} key={key} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>)
}