import React from "react";
import RestaurantSignUp from "./main/js/pages/restaurantSignUp/RestaurantSignUp";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const email_classes_eq = {
    teste_1:"jonas@gmail.com",
    teste_2:"jonasgmail.com",
    teste_3:"jonas@gmail",
    teste_4:"jonas@gmail!com",
    teste_5:"jonas@.com"
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

    it("classes de equivalencia - email - teste 1", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            email={email_classes_eq.teste_1}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - email - teste 2", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            email={email_classes_eq.teste_2}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - email - teste 3", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            email={email_classes_eq.teste_3}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - email - teste 4", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            email={email_classes_eq.teste_4}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });

    it("classes de equivalencia - email - teste 5", () => {
        const { getByText } = render(
            <BrowserRouter>
                <RestaurantSignUp 
                            id={0}
                            key={0}
                            email={email_classes_eq.teste_5}/>
            </BrowserRouter>
        );

        expect(getByText('Cadastre seu restaurante')).toBeTruthy()
    });
});
