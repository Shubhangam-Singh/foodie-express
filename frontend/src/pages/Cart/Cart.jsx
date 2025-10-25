import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext)
  const navigate = useNavigate()

  // Check if cart is empty
  const isCartEmpty = getTotalCartAmount() === 0

  return (
    <div className='cart'>
      {isCartEmpty ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <button onClick={() => navigate('/')}>Start Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={url + "/images/" + item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>{currency}{item.price}</p>
                      
                      {/* Quantity counter with +/- buttons */}
                      <div className="cart-item-quantity">
                        <button 
                          className="cart-quantity-btn"
                          onClick={() => removeFromCart(item._id)}
                          title="Decrease quantity"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="cart-quantity-value">
                          {cartItems[item._id]}
                        </span>
                        <button 
                          className="cart-quantity-btn"
                          onClick={() => addToCart(item._id)}
                          title="Increase quantity"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <p>{currency}{item.price * cartItems[item._id]}</p>
                      <p
                        className='cart-items-remove-icon'
                        onClick={() => {
                          // Remove all quantities of this item
                          const quantity = cartItems[item._id]
                          for (let i = 0; i < quantity; i++) {
                            removeFromCart(item._id)
                          }
                        }}
                        title="Remove item"
                        role="button"
                        aria-label="Remove item from cart"
                      >
                        ×
                      </p>
                    </div>
                    <hr />
                  </div>
                )
              }
              return null
            })}
          </div>

          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>{currency}{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
                </div>
              </div>
              <button onClick={() => navigate('/order')}>
                PROCEED TO CHECKOUT
              </button>
            </div>

            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, enter it here</p>
                <div className='cart-promocode-input'>
                  <input
                    type="text"
                    placeholder='Enter promo code'
                    aria-label="Promo code"
                  />
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
