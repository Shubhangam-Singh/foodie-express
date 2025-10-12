import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    // Filter food items based on category
    const filteredFoodList = food_list.filter(item => 
        category === "All" || category === item.category
    );

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <p className='food-display-subtitle'>
                {category === "All" 
                    ? "Discover our full menu of delicious dishes" 
                    : `Explore our ${category} selection`}
            </p>

            {filteredFoodList.length > 0 ? (
                <div className='food-display-list'>
                    {filteredFoodList.map((item, index) => (
                        <FoodItem 
                            key={item._id} 
                            image={item.image} 
                            name={item.name} 
                            desc={item.description} 
                            price={item.price} 
                            id={item._id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        />
                    ))}
                </div>
            ) : (
                <div className='food-display-empty'>
                    <div className='food-display-empty-icon'>🍽️</div>
                    <p>No dishes found in this category</p>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                        Try selecting a different category
                    </p>
                </div>
            )}
        </div>
    )
}

export default FoodDisplay
