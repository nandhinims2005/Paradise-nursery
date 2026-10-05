import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, selectCartItems, selectCartTotal, updateQuantity } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleQuantityChange = (id, step) => {
    const item = cartItems.find((entry) => entry.id === id);
    if (!item) return;

    const nextQuantity = item.quantity + step;
    dispatch(updateQuantity({ id, quantity: nextQuantity }));
  };

  return (
    <main className="cart-page section-shell">
      <div className="cart-header">
        <p className="eyebrow">Your cart</p>
        <h1>Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((item) => (
              <article key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <div className="cart-text">
                    <h3>{item.name}</h3>
                    <p>Unit price: ${item.price}</p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="cart-controls">
                    <div className="quantity-controls">
                      <button type="button" onClick={() => handleQuantityChange(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => handleQuantityChange(item.id, 1)}>
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Cart total</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <button
              type="button"
              className="checkout-button"
              onClick={() => setCheckoutMessage('Coming Soon!')}
            >
              Checkout
            </button>
            {checkoutMessage && <p className="checkout-status">{checkoutMessage}</p>}
            <Link to="/products" className="continue-shopping-btn">
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
};

export default CartItem;
