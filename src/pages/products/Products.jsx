import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectLoading, selectProducts } from '../../slice/ProductSlice';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ProductCard from '../../components/productCard/ProductCard';
import "./products.css";
import loader from "../../assets/loaders/loader.svg";
import { setSelectedCurrency } from '../../slice/AuthSlice';
import axios from 'axios';

const Products = () => {
  const dispatch = useDispatch();
  let products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const selectedCurrency = useSelector(state=>state.auth.selectedCurrency);
  console.log({selectedCurrency})

  const [currentPage, setCurrentPage] = useState(1);
  const [exchangeRates, setCartExchangeRates] = useState([]);

  const productsPerPage = 10;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  useEffect(() => {
    const fetchCartExchangeRates = async () => {
        try {
          console.log({selectedCurrency})
            const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`);
            setCartExchangeRates(response.data.rates);
        } catch (error) {
            console.error("Error fetching exchange rates:", error);
        }
    };
    fetchCartExchangeRates();
}, [selectedCurrency]);


  const endIndex = currentPage * productsPerPage;
  const startIndex = endIndex - productsPerPage;
  const currentPageProducts = products.slice(startIndex, endIndex);


  if (loading) {
    return <div className="loading"><img src="https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-47-978_512.gif" alt="loader" /></div>
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
    <div className='productsWrapper'>
      <h2>Products</h2>
      <div>
        <select onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency}>
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
    </div>
  )
}

export default Products
