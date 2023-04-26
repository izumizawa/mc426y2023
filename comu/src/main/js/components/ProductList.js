import * as React from "react";
import { useTheme } from "@mui/material/styles";
import ProductCard from "./ProductCard";
import Stack from "@mui/material/Stack";
import Donuts from "../assets/images/donuts.jpg";
import { useState, useEffect } from "react";
import { getProductsFromCatalogue } from "../config/firebase";

export default function ProductList(props) {
  const theme = useTheme();
  const [products, setProducts] = useState({docs: []})

  useEffect(() => {
    getProductsFromCatalogue("R3o4bdUuF3Til25xtrAn").then(e => {
      setProducts(e)
    })
  }, [])

  const productsList = products.docs.map(function(productDoc) {
    const product = productDoc.data()
    return (
      <ProductCard
        key={product.title}
        category={product.category}
        title={product.title}
        description={product.description}
        price={product.price}
        image={Donuts}
        image_description={product.image_description}
      />
    )
  })

  return (
    <Stack direction="column" spacing={2}>
      { productsList }
    </Stack>
  );
}
