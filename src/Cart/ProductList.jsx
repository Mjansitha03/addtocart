import React from "react";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-container">
      {/* loop through all products and show each one */}
      {products.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="product-image" />
          <h3>{item.title}</h3>
          <p className="desc">{item.description}</p>
          <p className="price">$ {item.price}</p>
          <div className="rating">
            <p>
              Rating: <span>{item.rating.rate}</span>
            </p>
            <p>
              Count: <span>{item.rating.count}</span>
            </p>
          </div>

          {/* button to add product to cart */}
          <button className="add-btn" onClick={() => onAddToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
