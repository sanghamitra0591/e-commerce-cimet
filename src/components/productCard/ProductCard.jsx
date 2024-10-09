import { useDispatch, useSelector } from "react-redux";
import { showEllipsis } from "../../utils/helperFunctions";
import "./productCard.css";
import { addToCart, deleteFromCart, removeFromCart, selectCart } from "../../slice/CartSlice";

const ProductCard = ({ product }) => {
  const { id, description, title, price, image, brand } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const productInCart = cart.find((cartItem) => cartItem.id === id);

  return (
    <>
      <div className="productCard">
        <img className="productImage" src={image} alt={title} loading="lazy" />
        <h3 className="productTitle">{showEllipsis(title, 3) + "..."}</h3>
        <p className="productDescription">{showEllipsis(description, 25) + "..."}</p>
        <div className="priceBrandContainer">
          <span className="productPrice">Rs {price}</span>
          <span className="productBrand">{brand}</span>
        </div>
        {
          productInCart ?
            <div className="buttonsContainer">
              <div className="countContainer">
                <button className="remove" onClick={() => dispatch(removeFromCart(product))}>-</button>
                <span className="count">{productInCart.quantity}</span>
                <button className="add" onClick={() => dispatch(addToCart(product))}>+</button>
              </div>
              <div className="deleteAllContainer">
                <button className="delete" onClick={() => dispatch(deleteFromCart(product))}>Delete From Cart</button>
              </div>
            </div>
            :
            <div className="addToCartContainer">
              <button className="addToCart" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
        }
      </div>
    </>
  )
}

export default ProductCard;
