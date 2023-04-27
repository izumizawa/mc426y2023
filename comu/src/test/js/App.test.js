import { render, screen } from "@testing-library/react";
import App from "../../main/js/App";
import ProductCard from "../../main/js/components/ProductCard";
import Donuts from "../assets/images/donuts.jpg";
import NewProductButton from "../../main/js/components/NewProductButton";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("opens and closes edit screen", () => {
  const product = {
    category:"Sobremesas",
    title:"Donuts de brigadeiro com granulado",
    description:"Três deliciosas unidades de donuts, recheadas com brigadeiro da melhor qualidade e granulados coloridos – para adoçar sua tarde!",
    price:23
  }
  const component = render(<ProductCard
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
  let card = component.toJSON();
  expect(card).toMatchSnapshot();
  act(() => {
    component.handleClickOpenEdit();
  });
  card = component.toJson();
  expect(card).toMatchSnapshot();
  act(() => {
    component.handleCloseEdit();
  });
  card = component.toJson();
  expect(card).toMatchSnapshot();
  act(() => {
    component.handleClickOpenEdit();
  });
  act(() => {
    component.handleEdit(product);
  });
  card = component.toJson();
});

test("opens and closes delete screen", () => {
  const product = {
    category:"Sobremesas",
    title:"Donuts de brigadeiro com granulado",
    description:"Três deliciosas unidades de donuts, recheadas com brigadeiro da melhor qualidade e granulados coloridos – para adoçar sua tarde!",
    price:23
  }
  const component = render(<ProductCard
    id={0}
    key={0}
    category={product.title}
    title={product.title}
    description={product.description}
    price={product.price}
    image={Donuts}
    image_description=""
    updateProducts={() => {}}
  />);
  let card = component.toJSON();
  expect(card).toMatchSnapshot();
  act(() => {
    component.handleClickOpenDelete();
  });
  card = component.toJson();
  expect(card).toMatchSnapshot();
  act(() => {
    component.handleCloseDelete();
  });
  card = component.toJson();
  expect(card).toMatchSnapshot();
  act(() => {
    component.handleClickOpenDelete();
  });
  act(() => {
    component.handleDelete();
  });
  card = component.toJson();
});

test("opens and closes new product screen", () => {
  const component = render(<NewProductButton
    setReload={() => {}}
  />);
  let button = component.toJSON();
  expect(button).toMatchSnapshot();
  act(() => {
    component.handleClickOpen();
  });
  expect(button).toMatchSnapshot();
  act(() => {
    component.handleClose();
  });
  expect(button).toMatchSnapshot();
  act(() => {
    component.handleClickOpen();
  });
  act(() => {
    component.handleInclude();
  });
  expect(button).toMatchSnapshot();
});