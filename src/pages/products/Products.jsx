import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectLoading, selectProducts } from '../../slice/ProductSlice';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ProductCard from '../../components/productCard/ProductCard';
import "./products.css";
import loader from "../../assets/loaders/loader.svg";
import { setSelectedCurrency } from '../../slice/AuthSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const selectedCurrency = useSelector(state=>state.selectedCurrency)

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
  const convertPrice = (price) => {
    if (selectedCurrency === 'USD') return price;
    return (price * exchangeRates[selectedCurrency]).toFixed(2);
  };
  const changeCurrency = (currency) => {
    setSelectedCurrency(currency);
    products.map(el => ({
      ...el,
      price: convertPrice(el.price)
    }))
  };

  return (
    <>
      <h2>Products</h2>
      <div>
        <select onChange={(e) => changeCurrency(e.target.value)} value={selectedCurrency}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EURO</option>
        </select>
      </div>
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
