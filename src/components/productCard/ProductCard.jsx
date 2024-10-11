import { useDispatch, useSelector } from "react-redux";
import { showEllipsis } from "../../utils/helperFunctions";
import "./productCard.css";
import { addToCart, deleteFromCart, removeFromCart, selectCart } from "../../slice/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { fetchSingleProduct } from "../../slice/SingleProductSlice";

const ProductCard = ({ product }) => {
  const { id, description, title, price, image, brand } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const productInCart = cart.find((cartItem) => cartItem.id === id);
  const navigate = useNavigate();
  const handleSingleProductClick = () => {
    dispatch(fetchSingleProduct(id));
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div className="productCard" onClick={handleSingleProductClick}>
        <img className="productImage" src={image} alt={title} loading="lazy" />
        <div className="productDetailsWrapperCard">
          <h3 className="productTitle">{showEllipsis(title, 3) + "..."}</h3>
          <p className="productDescription">{showEllipsis(description, 25) + "..."}</p>
          <div className="priceBrandContainer">
            <span className="productPrice">$ {price}</span>
          </div>
          {
            productInCart ?
              <div className="buttonsContainer">
                <div className="countContainer">
                  <button className="remove" onClick={() => dispatch(removeFromCart(product))}>-</button>
                  <span className="count">{productInCart.quantity}</span>
                  <button className="add" onClick={() => dispatch(addToCart(product))}>+</button>
                </div>
                <div className="deleteAllContainer" onClick={() => dispatch(deleteFromCart(product))}>
                  <MdDelete className="delete" />
                </div>
              </div>
              :
              <div className="addToCartContainer">
                <button className="addToCart" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default ProductCard;
