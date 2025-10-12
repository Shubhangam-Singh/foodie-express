import React, { useEffect, useState } from 'react'
import './List.css'
import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch items");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const removeFood = async (foodId, foodName) => {
    // Confirmation dialog
    if (!window.confirm(`Are you sure you want to delete "${foodName}"?`)) {
      return;
    }

    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId
      });
      
      if (response.data.success) {
        toast.success(response.data.message || 'Item deleted successfully');
        await fetchList();
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  // Calculate stats
  const totalItems = list.length;
  const totalCategories = [...new Set(list.map(item => item.category))].length;

  return (
    <div className='list add flex-col'>
      <p>All Food Items</p>

      {/* Stats Bar */}
      {!loading && list.length > 0 && (
        <div className="list-stats">
          <div className="list-stats-item">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="list-stats-item">
            <span>Categories</span>
            <span>{totalCategories}</span>
          </div>
          <div className="list-stats-item">
            <span>Status</span>
            <span style={{ fontSize: '16px', color: '#4CAF50' }}>● Active</span>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="list-table">
          <div className="list-loading">
            <div className="spinner"></div>
          </div>
        </div>
      ) : list.length === 0 ? (
        /* Empty State */
        <div className="list-table">
          <div className="list-empty">
            <div className="list-empty-icon">📦</div>
            <h3>No items found</h3>
            <p>Add your first food item to get started</p>
            <button onClick={() => navigate('/add')}>
              Add Item
            </button>
          </div>
        </div>
      ) : (
        /* Table with Items */
        <div className='list-table'>
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div 
                key={index} 
                className='list-table-format'
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency}{item.price}</p>
                <p 
                  className='cursor' 
                  onClick={() => removeFood(item._id, item.name)}
                  title="Delete item"
                >
                  ×
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default List
