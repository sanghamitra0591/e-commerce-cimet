import { useDispatch } from "react-redux";
import { showEllipsis } from "../../utils/helperFunctions"
import "./cartProducts.css"
import { MdDelete } from "react-icons/md";
import { addToCart, deleteFromCart, removeFromCart } from "../../slice/CartSlice";

const CartProducts = ({ product }) => {

  const { id, title, image, price, quantity } = product;
  const dispatch = useDispatch();

  return (
    <>
      <div className="cartProductsContainer">
        <img className="cartProductImage" src={image} alt={title} loading="lazy" />
        <h3 className="cartProductTitle">{showEllipsis(title, 3) + "..."}</h3>
        <div className="cartProductPriceBrandContainer">
          <span className="cartProductPrice">Rs {price}</span>
          <span className="cartProductTotalPrice">Rs {price * quantity}</span>
        </div>
        <div className="cartProductButtonsContainer">
          <div className="cartProductCountContainer">
            <button className="cartRemove" onClick={() => dispatch(removeFromCart(product))}>-</button>
            <span className="cartCount">{quantity}</span>
            <button className="cartAdd" onClick={() => dispatch(addToCart(product))}>+</button>
          </div>
          <div className="cartProductDeleteAllContainer" onClick={() => dispatch(deleteFromCart(product))}>
            <MdDelete className="cartDelete" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProducts
