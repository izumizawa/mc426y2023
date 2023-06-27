import React, { useEffect, useState } from "react";
import { getAllStores, getStoreByName } from "../services/store";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RestaurantItem from "../components/RestaurantItem";
import styles from "./RestaurantList.module.css"

export default function ChooseRestaurant() {
    const [stores, setStores] = useState([]);
    const [search, setSearch] = useState('');

    async function fetchStore() {
        const response = await getAllStores();
        setStores(response)
    }

    useEffect(() => {
        fetchStore()
    }, [])

    const handleKeyDown = async (key) => {
        if (key === 'Enter' && search) {
            const response = await getStoreByName(search)
            if (response) setStores([response])
        }
        else if (key === 'Enter' && !search) fetchStore()
    }

    return (
        <div className={styles.container} >
            <Header search={search} setSearch={setSearch} handleKeyDown={handleKeyDown} />
            <main className={styles.main}>
                <h1 className={styles.title}>Selecione um restaurante</h1>

                <div className={styles.storesList}>
                    {stores.map((store, key) => (
                        <RestaurantItem store={store} key={key} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>)
}