import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import { CartProvider } from "./context/CartProvider";
import { CheckOut } from "./components/CheckOut";
import { OrderConfirmed } from "./components/OrderConfirmed";
import Orders from "./components/Orders";

function App() {



  return (
    <div style={{ backgroundColor: 'rgb(51,51,51)' }}>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/order/:orderId" element={<OrderConfirmed />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
