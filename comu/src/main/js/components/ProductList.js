import { useTheme } from "@mui/material/styles";
import ProductCard from "./ProductCard";
import Stack from "@mui/material/Stack";
import Donuts from "../assets/images/donuts.jpg";
import { useState, useEffect } from "react";
import { getProductsFromCatalogue } from "../config/firebase";

export default function ProductList(props) {
  const theme = useTheme();
  const [products, setProducts] = useState({docs: []})

  const updateProducts = () => {
    getProductsFromCatalogue("R3o4bdUuF3Til25xtrAn").then(e => {
      setProducts(e)
    })
  }

  useEffect(() => {
    updateProducts();
  }, [])

  useEffect(() => {
    updateProducts();
    props.setReload(false);
  },[props.reload])

  const productsList = products.docs.map(function(productDoc) {
    const product = {id: productDoc.id, ...productDoc.data()}
    return (
      <ProductCard
        id={product.id}
        key={product.title}
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
      { productsList }
    </Stack>
  );
}
