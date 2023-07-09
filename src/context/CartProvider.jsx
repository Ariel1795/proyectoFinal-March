import React, { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {

  const [cartProducts, setCartProducts] = useState([])
  const [count, setCount] = useState(0);

  const onAddToCart = (product) => {
    if (cartProducts.find((e) => e.id === product.id)) {
      const productToCart = cartProducts.map((e) =>
        e.id === product.id ? { ...e, quantity: e.quantity + 1 } : e
      );
      return setCartProducts([...productToCart]);
    }
    const productToCart = { ...product, quantity: 1 }
    setCartProducts([...cartProducts, productToCart]);
  };

  const onRemoveProduct = (productId) => {
    const newCart = cartProducts.filter((p) => p.id !== productId);
    setCartProducts(newCart);
  };

  const onDecreaseQuantity = (productId) => {
    let newArray = cartProducts.map((p) => {
      if (p.id === productId) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setCartProducts(newArray);
  };
  const onIncreaseQuantity = (productId) => {
    let newArray = cartProducts.map((p) => {
      if (p.id === productId) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setCartProducts(newArray);
  };

  const onDeleteCartProducts = () => {
    setCartProducts([]);
  };


  return (
    <CartContext.Provider value={{ cartProducts, count, setCount, onAddToCart, onRemoveProduct, onDecreaseQuantity, onIncreaseQuantity, onDeleteCartProducts }}>
      {children}
    </CartContext.Provider>
  )

}
