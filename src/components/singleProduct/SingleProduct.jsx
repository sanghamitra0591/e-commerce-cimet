import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "../../slice/ProductSlice"
import { useParams } from "react-router-dom";
import "./singleProduct.css";
import { addToCart, deleteFromCart, removeFromCart, selectCart } from "../../slice/CartSlice";

const SingleProduct = () => {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id === Number(productId));
  const productInCart = cart.find((product) => product.id === Number(productId));
  const dispatch = useDispatch();

  if (!currentProduct) return <p>Product not found!</p>;

  const { title, image, price, description, brand, model, color, discount } = currentProduct;

  return (
    <div className="singleProductContainer">
      <div className="singleProductImageContainer">
        <img src={image} alt={title} className="singleProductImage" />
      </div>

      <div className="singleProductDetails">
        <h1 className="singleProductTitle">{title}</h1>
        <p className="singleProductBrand">Brand: {brand}</p>
        <p className="singleProductModel">Model: {model}</p>
        <p className="singleProductColor">Color: {color}</p>
        <p className="singleProductDescription">{description}</p>
        <div className="singleProductPriceContainer">
          {discount ? (
            <>
              <span className="singleProductDiscountPrice">
                Rs {price - (price * discount) / 100}
              </span>
              <span className="singleProductOriginalPrice">Rs {price}</span>
              <span className="singleProductDiscountTag">{discount}% OFF</span>
            </>
          ) : (
            <span className="singleProductPrice">Rs {price}</span>
          )}
        </div>
        {
          productInCart ?
            <div className="buttonsContainer">
              <div className="countContainer">
                <button className="remove" onClick={() => dispatch(removeFromCart(currentProduct))}>-</button>
                <span className="count">{productInCart.quantity}</span>
                <button className="add" onClick={() => dispatch(addToCart(currentProduct))}>+</button>
              </div>
              <div className="deleteAllContainer">
                <button className="delete" onClick={() => dispatch(deleteFromCart(currentProduct))}>Delete From Cart</button>
              </div>
            </div>
            :
            <div className="addToCartContainer">
              <button className="addToCart" onClick={() => dispatch(addToCart(currentProduct))}>Add To Cart</button>
            </div>
        }
      </div>
    </div>
  );
};

export default SingleProduct;