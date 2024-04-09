import { useDispatch } from "react-redux";
import { wishListActions } from "../store/wishListSlice";

import { CiSaveDown2 } from "react-icons/ci";

const WishListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(wishListActions.removeFromWishList(item.id));
  };
  return (
    <div className="wishlist-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemove}>
      <CiSaveDown2 />
      </div>
    </div>
  );
};
export default WishListItem;
