import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currentlty empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">quanity</h3>
            <h3 className="total">Total</h3>
          </div>

          <div className="cart-items">
            {cart.cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-product">
                  <img src={item.image} alt="iamge product" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <button>Remove</button>
                  </div>
                  <div className="cart-product-price">${item.price}</div>
                  <div className="cart-product-quatity">
                    <button>+</button>
                    <div className="count">{item.cartQuantity}</div>
                    <button>-</button>
                  </div>
                  <div className="cart-total-price">
                    ${item.cartQuantity * item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-sammary">
            <button className="clear-button">clear cart</button>
            <div className="checkout">
              <div className="sub-total">
                <span>Sub-total</span>
                <span className="amount">{cart.cartTotalAmount}</span>
                <p>Tax and shipping calculated at checkout</p>
                <button>checkout</button>
              </div>
            </div>
            <div className="continue-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start shopping</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
