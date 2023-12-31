import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDeatailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";

import CartContextProvider from "./components/CartContext.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido!" />}
          ></Route>
          <Route
            path="/categoria/:categoria"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/item/:id" element={<ItemDeatailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartContextProvider>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
