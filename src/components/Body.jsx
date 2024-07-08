import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurantsList)

    return (
        <div className="body">
            {/* <div className="search-bar">Search</div> */}
            <div className="filter">
                <button
                    className="top-rated-filter-btn"
                    onClick={() => setRestaurantList(
                            restaurantList.filter(restaurantData => restaurantData?.info?.avgRating > 4)
                        )
                    }
                >
                    Top rated Restaurants
                </button>
            </div>
            <div className="restaurants-card-container">
                {
                    restaurantList.map(restaurantData => <RestaurantCard key={restaurantData?.info?.id} restaurantData={restaurantData} />)
                }
            </div>
        </div>
    )
}

export default Body;