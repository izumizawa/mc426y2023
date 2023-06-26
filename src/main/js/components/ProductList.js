import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import Stack from "@mui/material/Stack";
import Donuts from "../assets/images/donuts.jpg";
import { useState, useEffect } from "react";
import { getProductsFromCatalogue } from "../services/catalogue";
import { UserContext } from "../contexts/UserContext";
import { getStoreByEmail } from "../services/store";

export default function ProductList(props) {
  const [products, setProducts] = useState({ docs: [] })

  const { getCurrentUser } = useContext(UserContext);
  const { uid, email } = getCurrentUser();
  
  const updateProducts = () => {
    const storeId = getStoreByEmail(email);
    console.log("storeId: ", storeId);
    getProductsFromCatalogue(storeId).then(e => {
      setProducts(e)
    })
  }

  useEffect(() => {
    updateProducts();
  }, [])

  useEffect(() => {
    updateProducts();
    props.setReload(false);
  }, [props.reload])

  const productsList = products.docs.map(function (productDoc) {
    const product = { id: productDoc.id, ...productDoc.data() }
    return (
      <ProductCard
        id={product.id}
        key={product.id}
        category={product.category}
        title={product.title}
        description={product.description}
        price={product.price}
        image={Donuts}
        image_description=""
        updateProducts={updateProducts}
      />
    )
  })

  return (
    <Stack direction="column" spacing={2}>
      {productsList}
    </Stack>
  );
}
