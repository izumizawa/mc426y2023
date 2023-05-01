import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ProductCard from "./main/js/components/ProductCard";
import Donuts from "./main/js/assets/images/donuts.jpg"

const product = {
    category:"Sobremesas",
    title:"Donuts de brigadeiro com granulado",
    description:"Três deliciosas unidades de donuts, recheadas com brigadeiro da melhor qualidade e granulados coloridos – para adoçar sua tarde!",
    price:23
}

describe('ProductCard', () => {
    it('match ProductCard snapshot', () => {
        const component = renderer.create(
        <ProductCard
            id={0}
            key={0}
            category={product.title}
            title={product.title}
            description={product.description}
            price={product.price}
            image={Donuts}
            image_description=""
            updateProducts={() => {}}
        />
        ).toJSON()

        expect(component).toMatchSnapshot()
    })

    it('test card title', () => {
        const { getByText } = render(
        <ProductCard
            id={0}
             key={0}
             category={product.title}
             title={product.title}
             description={product.description}
             price={product.price}
             image={Donuts}
             image_description=""
             updateProducts={() => {}}
         />)

        expect(getByText(product.description)).toBeTruthy()

    })
})