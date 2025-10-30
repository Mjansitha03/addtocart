import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      {/* website logo and name */}
      <h2 className="logo">
        Greeny Shop
        <BiSolidLeaf />{" "}
      </h2>

      {/* cart icon section */}
      <div className="cart-section" onClick={onCartClick}>
        {/* shopping cart button */}
        <button className="shop-cart">
          <FaShoppingCart />
        </button>

        {/* show number of items in cart */}
        <div className="cart-count">{cartCount}</div>
      </div>
    </nav>
  );
};

export default Navbar;
