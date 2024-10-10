import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectLoading, selectProducts } from '../../slice/ProductSlice';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ProductCard from '../../components/productCard/ProductCard';
import "./products.css";
import loader from "../../assets/loaders/loader.svg";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])


  const endIndex = currentPage * productsPerPage;
  const startIndex = endIndex - productsPerPage;
  const currentPageProducts = products.slice(startIndex, endIndex);


  if (loading) {
    return <div className="loading"><img src={loader} alt="loader" /></div>
  }

  return (
    <>
      <h2>Products</h2>
      <div className="productsContainer">
        {
          currentPageProducts.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
      <div className="pagination">
        <Pagination
          totalItems={products.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Products
