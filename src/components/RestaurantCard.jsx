import { RESTAURANT_LOGO_CDN_ENDPOINT_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { restaurantData } = props
    const { cloudinaryImageId, name, cuisines, avgRatingString, sla } = restaurantData?.info
    return (
        <div className="restaurant-card">
            <div>
                <img className="restaurant-logo"
                    alt="Restaurant Logo"
                    src={`${RESTAURANT_LOGO_CDN_ENDPOINT_URL}${cloudinaryImageId}`}
                />
            </div>
            <div>
                <center><h3>{name}</h3></center>
            </div>
            <div>
                <h4>{cuisines.join(", ")}</h4>
            </div>
            <div>
                <span className="star-rating">{avgRatingString}<img className="rating-star" src="https://www.pinclipart.com/picdir/middle/5-50759_dodgeball-clipart.png" /></span>
            </div >
            <div>
                <h4>{sla?.slaString}</h4>
            </div >
        </div >
    )
}

export default RestaurantCard;