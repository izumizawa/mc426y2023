import AppBar from "../components/AppBar";
import ProductList from "../components/ProductList";
import NewProductButton from "../components/NewProductButton";
import Box from "@mui/material/Box";

function MenuPage() {
  return (
    <div>
      <AppBar />
      <Box
        justifyContent="flex-end"
        sx={{
          display: "flex",
          paddingTop: "56px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NewProductButton />
        <ProductList />
      </Box>
    </div>
  );
}

export default MenuPage;