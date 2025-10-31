import React, { useEffect, useState } from "react";
import Navbar from "./Cart/Navbar";
import ProductList from "./Cart/ProductList";
import CartModel from "./Cart/CartModel";
import axios from "axios";
import { Atom } from "react-loading-indicators";

const App = () => {
  // to save all products
  const [products, setProducts] = useState([]);
  // to save added cart items
  const [cartItems, setCartItems] = useState([]);
  // to show or hide cart modal
  const [model, setModel] = useState(false);
  // to show loading spinner
  const [loading, setLoading] = useState(true);

  // load products and cart when page starts
  useEffect(() => {
    fetchProducts();

    // Load saved cart from localStorage
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // get products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // save cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // add item to cart
  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);

    if (alreadyInCart) {
      alert("Item already added to the cart!");
      return;
    }

    // add new item to cart
    setCartItems([...cartItems, product]);
  };

  // remove item from cart
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // show loading icon while data loads
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Atom color="#32cd32" size="medium" text="" textColor="#32cd32" />
      </div>
    );
  }

  return (
    <>
      {/* navbar with cart count */}
      <Navbar cartCount={cartItems.length} onCartClick={() => setModel(true)} />

      {/* show product list */}
      <div className="container">
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>

      {/* show cart modal when clicked */}
      {model && (
        <CartModel
          cartItems={cartItems}
          onClose={() => setModel(false)}
          onRemove={handleRemoveFromCart}
        />
      )}
    </>
  );
};

export default App;

