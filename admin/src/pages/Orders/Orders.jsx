import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url, currency } from '../../assets/assets';
import { useTheme } from '../../context/ThemeContext';

const Order = () => {
  const { darkMode } = useTheme();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data.reverse());
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      });
      
      if (response.data.success) {
        toast.success("Status updated successfully");
        await fetchAllOrders();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  // Calculate stats
  const totalOrders = orders.length;
  const processingOrders = orders.filter(o => o.status === "Food Processing").length;
  const deliveredOrders = orders.filter(o => o.status === "Delivered").length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className={`order add ${darkMode ? 'dark-mode' : ''}`}>
      <h3>Order Management</h3>

      {/* Order Stats */}
      {!loading && orders.length > 0 && (
        <div className="order-stats">
          <div className="order-stat-card">
            <h4>Total Orders</h4>
            <p>{totalOrders}</p>
          </div>
          <div className="order-stat-card">
            <h4>Processing</h4>
            <p style={{ color: darkMode ? '#FFB300' : '#FFC107' }}>{processingOrders}</p>
          </div>
          <div className="order-stat-card">
            <h4>Delivered</h4>
            <p style={{ color: darkMode ? '#66BB6A' : '#4CAF50' }}>{deliveredOrders}</p>
          </div>
          <div className="order-stat-card">
            <h4>Total Revenue</h4>
            <p>{currency}{totalRevenue}</p>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="order-loading">
          <div className="spinner"></div>
        </div>
      ) : orders.length === 0 ? (
        /* Empty State */
        <div className="order-empty">
          <div className="order-empty-icon">📦</div>
          <h3>No orders yet</h3>
          <p>Orders will appear here once customers place them</p>
        </div>
      ) : (
        /* Order List */
        <div className="order-list">
          {orders.map((order, index) => (
            <div 
              key={index} 
              className='order-item'
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img src={assets.parcel_icon} alt="Order" />
              
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity
                    } else {
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}
                </p>
                <p className='order-item-name'>
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className='order-item-address'>
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                  </p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>

              <p>Items: {order.items.length}</p>
              <p>{currency}{order.amount}</p>

              <select 
                onChange={(e) => statusHandler(e, order._id)} 
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Order
