import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, currency } = useContext(StoreContext);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  // Get status class based on order status
  const getStatusClass = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('processing')) return 'status-processing';
    if (statusLower.includes('delivery')) return 'status-out-for-delivery';
    if (statusLower.includes('delivered')) return 'status-delivered';
    return 'status-processing';
  }

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      
      {data.length === 0 ? (
        <div className="orders-empty">
          <div className="orders-empty-icon">📦</div>
          <h3>No orders yet</h3>
          <p>You haven't placed any orders. Start shopping now!</p>
          <button onClick={() => navigate('/')}>Browse Menu</button>
        </div>
      ) : (
        <div className="container">
          {data.map((order, index) => {
            return (
              <div 
                key={index} 
                className='my-orders-order'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={assets.parcel_icon} alt="Order" />
                
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity
                    } else {
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}
                </p>
                
                <p><strong>{currency}{order.amount}.00</strong></p>
                
                <p>Items: <strong>{order.items.length}</strong></p>
                
                <div className={`order-status ${getStatusClass(order.status)}`}>
                  <span>●</span>
                  <span>{order.status}</span>
                </div>
                
                <button onClick={fetchOrders}>
                  Track Order
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MyOrders
