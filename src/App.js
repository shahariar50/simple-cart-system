import PorductsList from "./components/producs/PorductsList";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import CartButton from "./components/cart/CartButton";
import Cart from "./components/cart/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-100 relative">
      <ToastContainer />
      <PorductsList />
      <CartButton setIsOpen={setIsOpen} />
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        size={350}
      >
        <Cart />
      </Drawer>
    </div>
  );
}

export default App;
