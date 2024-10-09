import { showEllipsis } from "../../utils/helperFunctions";
import "./productCard.css";

const ProductCard = ({ id, description, title, price, image, brand }) => {
  return (
    <>
      <div className="productCard">
        <img className="productImage" src={image} alt={title} loading="lazy" />
        <h3 className="productTitle">{showEllipsis(title, 3) + "..."}</h3>
        <p className="productDescription">{showEllipsis(description, 25) + "..."}</p>
        <div className="priceBrandContainer">
          <span className="productPrice">${price}</span>
          <span className="productBrand">{brand}</span>
        </div>
        <div className="addToCartContainer">
          <button className="addToCart">Add To Cart</button>
        </div>

        {/* DO NOT DELETE */}
        {/* <div className="buttonsContainer">
          <div className="countContainer">
            <button className="add">+</button>
            <span className="count">0</span>
            <button className="remove">-</button>
          </div>
          <div className="deleteAllContainer">
            <button className="delete">Delete From Cart</button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ProductCard;
