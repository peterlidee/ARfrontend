import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // this is our own custom provider
  // we will store data (state) and functionanility (updates)
  // and anyone can access it via consumer
  const [cartOpen, setCartOpen] = useState(false);
  function toggleCart() {
    setCartOpen(!cartOpen);
  }
  function closeCart() {
    setCartOpen(false);
  }
  function openCart() {
    setCartOpen(true);
  }
  return (
    <LocalStateProvider value={{ cartOpen, toggleCart, openCart, closeCart }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing cart local state
function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
