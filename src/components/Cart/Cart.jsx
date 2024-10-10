<<<<<<< HEAD
import React from "react";

const Cart = () => {
  return <div>Cart</div>;
};

export default Cart;
=======
import CartProducts from "../../components/cartProducts/CartProducts";
import "./cart.css";

const Cart = () => {

  const cartItems = [
    {
      "id": 1,
      "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      "price": 773,
      "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
      "brand": "sony",
      "model": "WH-1000XM3",
      "color": "silver",
      "category": "audio",
      "discount": 11,
      quantity: 5,
    },
    {
      "id": 1,
      "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      "price": 773,
      "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
      "brand": "sony",
      "model": "WH-1000XM3",
      "color": "silver",
      "category": "audio",
      "discount": 11,
      quantity: 5,
    },
    {
      "id": 1,
      "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      "price": 773,
      "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
      "brand": "sony",
      "model": "WH-1000XM3",
      "color": "silver",
      "category": "audio",
      "discount": 11,
      quantity: 5,
    },
    {
      "id": 1,
      "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      "price": 773,
      "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
      "brand": "sony",
      "model": "WH-1000XM3",
      "color": "silver",
      "category": "audio",
      "discount": 11,
      quantity: 5,
    },
    {
      "id": 1,
      "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      "price": 773,
      "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
      "brand": "sony",
      "model": "WH-1000XM3",
      "color": "silver",
      "category": "audio",
      "discount": 11,
      quantity: 5,
    },
  ]

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartProducts key={item.id} {...item} />
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
>>>>>>> origin/blogs
