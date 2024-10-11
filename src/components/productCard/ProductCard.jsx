import { useDispatch, useSelector } from "react-redux";
import { showEllipsis } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdStar } from "react-icons/md";
import { fetchSingleProduct } from "../../slice/SingleProductSlice";
import { addToCart, deleteFromCart, removeFromCart, selectCart } from "../../slice/CartSlice";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { _id, description, name, price, url, brand, category, totalRating, inStock, inventory } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const productInCart = cart.find((cartItem) => cartItem._id === product._id);
  const navigate = useNavigate();

  const handleSingleProductClick = () => {
    dispatch(fetchSingleProduct(product._id));
    navigate(`/products/${product._id}`);
  }

  return (
    <div className="product-card" onClick={handleSingleProductClick}>
      <div className="product-image-container">
        <img className="product-image" src={url} alt={name} loading="lazy" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{showEllipsis(name, 3)}</h3>
        <p className="product-description">{showEllipsis(description, 10)}</p>
        <div className="product-details">
          <span className="product-price">${price}</span>
          <span className="product-brand">{brand}</span>
        </div>
        <div className="product-meta">
          <span className="product-category">{category}</span>
          <span className="product-rating">
            {totalRating ? (
              <span className="rating">
                <MdStar /> {totalRating}
              </span>
            ) : null}

          </span>
        </div>
        <div className="inventory">
          {
            inStock ? (
              <span className="product-inventory">In stock: {inventory}</span>
            )
              :
              (
                <span className="out-of-stock">Out of Stock</span>
              )
          }
        </div>
      </div>
      {
        productInCart ?
          <div className="buttons-container">
            <div className="count-container">
              <button className="remove" onClick={(e) => { e.stopPropagation(); dispatch(removeFromCart(product)); }}>-</button>
              <span className="count">{productInCart.quantity}</span>
              <button className="add" onClick={(e) => { e.stopPropagation(); dispatch(addToCart(product)); }}>+</button>
            </div>
            <div className="delete-container" onClick={(e) => { e.stopPropagation(); dispatch(deleteFromCart(product)); }}>
              <MdDelete className="delete" />
            </div>
          </div>
          :
          <div className="add-to-cart-container">
            <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); dispatch(addToCart(product)); }}>Add To Cart</button>
          </div>
      }
    </div>
  )
}

export default ProductCard;