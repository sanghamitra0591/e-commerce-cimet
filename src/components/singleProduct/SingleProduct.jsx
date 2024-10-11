import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../slice/ProductSlice";
import { useParams } from "react-router-dom";
import { addToCart, deleteFromCart, removeFromCart, selectCart } from "../../slice/CartSlice";
import { MdDelete } from "react-icons/md";
import "./singleProduct.css";

const SingleProduct = () => {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const { productId } = useParams();

  const currentProduct = products.find((product) => product._id === productId);
  const productInCart = cart.find((product) => product._id === productId);
  const dispatch = useDispatch();

  if (!currentProduct) return <p className="single-product-not-found">Product not found!</p>;

  const { description, name, price, url, brand, category, totalRating, inStock, inventory } = currentProduct;

  return (
    <div className="single-product-container">
      <div className="single-product-image-section">
        <img src={url} alt={name} className="single-product-image" />
      </div>

      <div className="single-product-details">
        <h1 className="single-product-title">{name}</h1>
        <p className="single-product-brand">Brand: {brand}</p>
        <p className="single-product-category">Category: {category}</p>
        <p className="single-product-inventory">In Stock: {inStock ? `Yes (${inventory} left)` : "No"}</p>
        <p className="single-product-description">{description}</p>
        <div className="single-product-price-rating">
          <span className="single-product-rating">Ratings: ⭐ {totalRating}</span>
          <span className="single-product-price">$ {price}</span>
        </div>

        {productInCart ? (
          <div className="single-product-cart-controls">
            <div className="cart-quantity-controls">
              <button className="cart-remove" onClick={() => dispatch(removeFromCart(currentProduct))}>-</button>
              <span className="cart-quantity">{productInCart.quantity}</span>
              <button className="cart-add" onClick={() => dispatch(addToCart(currentProduct))}>+</button>
            </div>
            <button className="cart-delete" onClick={() => dispatch(deleteFromCart(currentProduct))}>
              <MdDelete className="cart-delete-icon" />
            </button>
          </div>
        ) : (
          <button className="single-product-add-to-cart" onClick={() => dispatch(addToCart(currentProduct))}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
