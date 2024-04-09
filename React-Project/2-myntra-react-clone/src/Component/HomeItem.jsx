import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";
import { wishListActions } from "../store/wishListSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const wishListItems = useSelector((store) => store.wishlist);
  const elementChange = wishListItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveToBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  const handleAddToWishList = () => {
    dispatch(wishListActions.addToWishList(item.id));
  };
  const handleRemoveToWishList = () => {
    dispatch(wishListActions.removeFromWishList(item.id));
  };
  console.log("clicked", handleAddToWishList);
  console.log("clicked", handleRemoveToWishList);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          {elementFound ? (
            <button
              type="button"
              className="btn btn-add-bag btn-danger"
              onClick={handleRemoveToBag}
            >
              <MdDelete /> Remove
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-add-bag btn-success"
              onClick={handleAddToBag}
            >
              <IoAddCircle /> Add To Bag
            </button>
          )}
          {elementChange ? (
            <button
              type="button"
              className="btn btn-danger "
              onClick={handleRemoveToWishList}
            >
              <CiSaveDown2 />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddToWishList}
            >
              <CiSaveDown2 />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomeItem;
