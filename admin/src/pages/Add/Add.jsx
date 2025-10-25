import React, { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTheme } from '../../context/ThemeContext';

const Add = () => {
    const { darkMode } = useTheme();
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Please select an image');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("price", Number(data.price));
            formData.append("category", data.category);
            formData.append("image", image);

            const response = await axios.post(`${url}/api/food/add`, formData);
            
            if (response.data.success) {
                toast.success(response.data.message || 'Item added successfully!');
                // Reset form
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: data.category
                });
                setImage(false);
            } else {
                toast.error(response.data.message || 'Failed to add item');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    return (
        <div className={`add ${darkMode ? 'dark-mode' : ''}`}>
            {/* Page Header */}
            <div className="add-header">
                <h2>Add New Item</h2>
                <p>Fill in the details below to add a new food item to your menu</p>
            </div>

            {/* Form */}
            <form className='flex-col' onSubmit={onSubmitHandler}>
                {/* Image Upload */}
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <input 
                        onChange={(e) => { 
                            setImage(e.target.files[0]); 
                            e.target.value = '';
                        }} 
                        type="file" 
                        accept="image/*" 
                        id="image" 
                        hidden 
                    />
                    <label htmlFor="image">
                        <img 
                            src={!image ? assets.upload_area : URL.createObjectURL(image)} 
                            alt="Upload preview" 
                            title="Click to upload image"
                        />
                    </label>
                </div>

                {/* Product Name */}
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input 
                        name='name' 
                        onChange={onChangeHandler} 
                        value={data.name} 
                        type="text" 
                        placeholder='e.g., Chicken Burger' 
                        required 
                    />
                </div>

                {/* Product Description */}
                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea 
                        name='description' 
                        onChange={onChangeHandler} 
                        value={data.description} 
                        rows={6} 
                        placeholder='Write a detailed description of the product...' 
                        required 
                    />
                </div>

                {/* Category and Price */}
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select name='category' onChange={onChangeHandler} value={data.category}>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price (₹)</p>
                        <input 
                            type="number" 
                            name='price' 
                            onChange={onChangeHandler} 
                            value={data.price} 
                            placeholder='e.g., 299' 
                            min="1"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type='submit' 
                    className='add-btn'
                    disabled={loading}
                >
                    {loading ? 'ADDING...' : 'ADD ITEM'}
                </button>
            </form>
        </div>
    )
}

export default Add
