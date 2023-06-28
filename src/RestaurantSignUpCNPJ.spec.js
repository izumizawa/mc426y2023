import React from "react";
import RestaurantSignUp from "./main/js/pages/restaurantSignUp/RestaurantSignUp";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const cnpj_classes_eq = {
    teste_1:"a9404.081000152",
    teste_2:"99.404.081/0001-52",
    teste_3:"23742858000127"
}

const cnpj_valor_lim = {
    teste_1:"a9404.081000152",
    teste_2:"99.404.081/0001-52",
    teste_3:"23742858000127"
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

    it("classes de equivalencia - cnpj - teste 1", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            identityDocument={cnpj_classes_eq.teste_1}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - cnpj - teste 2", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            identityDocument={cnpj_classes_eq.teste_2}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - cnpj - teste 3", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            identityDocument={cnpj_classes_eq.teste_3}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("valor limite - cnpj - teste 1", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            identityDocument={cnpj_valor_lim.teste_1}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("valor limite - cnpj - teste 2", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            identityDocument={cnpj_valor_lim.teste_2}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("valor limite - cnpj - teste 3", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            identityDocument={cnpj_valor_lim.teste_3}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });
});
