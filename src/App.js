import PorductsList from "./components/producs/PorductsList";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import CartButton from "./components/cart/CartButton";
import Cart from "./components/cart/Cart";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gray-100 relative">
      <PorductsList />
      {!isOpen && <CartButton setIsOpen={setIsOpen} />}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        size={300}
      >
        <Cart />
      </Drawer>
    </div>
  );
}

export default App;
