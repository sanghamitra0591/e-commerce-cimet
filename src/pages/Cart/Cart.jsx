import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../../components/cartProducts/CartProducts";
import "./cart.css";
import { checkOutFromCart, selectCart, selectCheckout } from "../../slice/CartSlice";
import cartEmpty from "../../assets/images/cartEmpty.webp";
import thankYou from "../../assets/images/thankYou.gif";

const Cart = () => {

  const cart = useSelector(selectCart) || [];
  const dispatch = useDispatch();
  const checkout = useSelector(selectCheckout);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <>
        {
          checkout ? (
            <div className="buy-now-container">
              <img src={thankYou} alt="thank-you" />
            </div>
          )
            :
            (
              <div className="buy-now-container">
                <img src={cartEmpty} alt="cart-empty" />
              </div>
            )
        }
      </>
    )
  }

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
          {
            cart.length > 0 && (
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
                <button className="cart-checkout-button" onClick={() => dispatch(checkOutFromCart())}>Proceed to Checkout</button>
              </div>
            )
          }

        </div>
      </div>
    </>
  );
};

export default Cart;