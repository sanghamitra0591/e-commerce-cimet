import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../../components/cartProducts/CartProducts";
import "./cart.css";
import { selectCart } from "../../slice/CartSlice";

const Cart = () => {

  const cart = useSelector(selectCart) || [];

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <CartProducts key={item?.id} product={item} />
            ))}
          </div>
          <div className="cart-summary">
            <h2 className="cart-summary-title">Cart Total</h2>
            <div className="cart-summary-row">
              <p>Subtotal</p>
              <p className="cart-summary-amount">₹{totalAmount}</p>
            </div>
            <div className="cart-summary-row">
              <p>Shipping</p>
              <p className="cart-summary-amount">Free</p>
            </div>
            <hr className="cart-summary-divider" />
            <div className="cart-summary-row cart-summary-total">
              <p>Total</p>
              <p className="cart-summary-amount">₹{totalAmount}</p>
            </div>
            <button className="cart-checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;