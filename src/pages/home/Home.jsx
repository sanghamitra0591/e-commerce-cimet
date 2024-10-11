import React, { useEffect } from 'react'
import Carousal from '../../components/Carousal/Carousal'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../slice/ProductSlice'

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Carousal />
      <FeatureProducts />
    </>

  )
}

export default Home
