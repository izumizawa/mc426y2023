import React from "react";
import RestaurantSignUp from "./main/js/pages/restaurantSignUp/RestaurantSignUp";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


const cep_classes_eq = {
    teste_1:"1308328a",
    teste_2:"13083-280",
    teste_3:"13083280"
}

describe("Demonstrating some useNavigate() tests ", () => {
    it('Renders the About component', () => {
        const component = renderer.create(
            <BrowserRouter>
                <RestaurantSignUp />
            </BrowserRouter>
        ).toJSON()

        expect(component).toMatchSnapshot()
    })

    it("classes de equivalencia - cep - teste 1", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            zipCode={cep_classes_eq.teste_1}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - cep - teste 2", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            zipCode={cep_classes_eq.teste_2}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - cep - teste 3", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            zipCode={cep_classes_eq.teste_3}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

});
