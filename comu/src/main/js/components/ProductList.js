import * as React from "react";
import { useTheme } from "@mui/material/styles";
import ProductCard from "./ProductCard";
import Stack from "@mui/material/Stack";
import Misto from "../assets/images/misto.jpg";
import Donuts from "../assets/images/donuts.jpg";
import Fanta from "../assets/images/fanta.jpg";

const mock = [
  {
    id: 0,
    category: "Sobremesas",
    title: "Donuts de brigadeiro com granulado",
    description:
      "Três deliciosas unidades de donuts, recheadas com brigadeiro da melhor" +
      " qualidade e granulados coloridos – para adoçar sua tarde!",
    price: "23,00",
    image: Donuts,
    image_description: "Donut de brigadeiro com granulado",
  },
  {
    id: 1,
    category: "Bebidas",
    title: "Fanta Guaraná – 350ml",
    description: "Refresque-se com o maravilhoso sabor do verdadeiro guaraná!",
    price: "6,00",
    image: Fanta,
    image_description: "Lata de Fanta Guaraná",
  },
  {
    id: 2,
    category: "Salgados",
    title: "Misto Quente",
    description: "O tradicional pão-com-queijo mais suculento que você já viu.",
    price: "8,00",
    image: Misto,
    image_description: "2 fatias de misto quente",
  },
];

export default function ProductList(props) {
  const theme = useTheme();

  return (
    <Stack direction="column" spacing={2}>
      <ProductCard
        category={mock[2].category}
        title={mock[2].title}
        description={mock[2].description}
        price={mock[2].price}
        image={mock[2].image}
        image_description={mock[2].image_description}
      />
      <ProductCard
        category={mock[0].category}
        title={mock[0].title}
        description={mock[0].description}
        price={mock[0].price}
        image={mock[0].image}
        image_description={mock[0].image_description}
      />
      <ProductCard
        category={mock[1].category}
        title={mock[1].title}
        description={mock[1].description}
        price={mock[1].price}
        image={mock[1].image}
        image_description={mock[1].image_description}
      />
    </Stack>
  );
}
