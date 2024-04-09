import { useSelector } from "react-redux";
import WishListItem from "./WishlistItem";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = wishListItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="wishlist-page">
        <div className="wishlist-items-container">
          {finalItems.map((item) => (
            <WishListItem item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default WishList;
