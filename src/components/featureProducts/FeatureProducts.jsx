import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchFeaturedProducts } from "../../slice/FeaturedProductsSlice";
import { useDispatch } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import "./FeaturedPoduct.css";

const FeatureProducts = () => {
  const dispatch = useDispatch();
  const [productPreviewData, setProductPreviewData] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const action = await dispatch(fetchFeaturedProducts());
      const data = action.payload || [];
      setProductPreviewData(data);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="featuredWrapper">
      <Carousel
        responsive={responsive}
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={3000} 
        keyBoardControl={true}
        transitionDuration={500}
      >
        {productPreviewData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureProducts;
