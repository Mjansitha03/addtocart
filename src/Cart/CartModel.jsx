import React from "react";

const CartModel = ({ cartItems, onClose, onRemove }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-section">
        <h2>Shopping Cart</h2>

        {/* check if cart is empty */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {/* show all items added to cart */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>$ {item.price}</p>
                </div>

                {/* button to remove item */}
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* button to close the cart modal */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModel;
