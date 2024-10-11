import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import "./FeaturedPoduct.css";
import { fetchProducts, } from "../../slice/ProductSlice";

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
    dispatch(fetchProducts())
      .unwrap()
      .then((data) => {
        setProductPreviewData(data.slice(0, 8))
      })
      .catch((e) => {
        console.log(e);
      })
  }, [dispatch]);

  console.log(productPreviewData)
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
          <ProductCard key={product._id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureProducts;
