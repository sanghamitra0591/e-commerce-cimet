import { showEllipsis } from "../../utils/helperFunctions";
import "./productCard.css";

const ProductCard = ({ id, description, title, price, image, brand }) => {
  return (
    <>
      <div className="productCard">
        <img className="productImage" src={image} alt={title} loading="lazy" />
        <h3 className="productTitle">{title}</h3>
        <p className="productDescription">{showEllipsis(description, 10)}</p>
        <div className="productPrice">${price}</div>
        <div className="productBrand">{brand}</div>
      </div>
    </>
  )
}

export default ProductCard;
