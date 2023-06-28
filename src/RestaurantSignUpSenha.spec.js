import React from "react";
import RestaurantSignUp from "./main/js/pages/restaurantSignUp/RestaurantSignUp";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const senha_valor_lim = {
    teste_1:"abc10",
    teste_2:"abc1234567&",
    teste_3:"abc1234587&"
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

    it("valor limite - senha - teste 1", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            password={senha_valor_lim.teste_1}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("valor limite - senha - teste 2", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            password={senha_valor_lim.teste_2}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("valor limite - senha - teste 3", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            password={senha_valor_lim.teste_3}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });
});
