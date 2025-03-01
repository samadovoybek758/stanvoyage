import React from 'react'
import AllHero from '@/components/shared/AllHero'
import productsImg from '../../../../../public/Images/products-hero.jpg'
import ProductList from './ProductList';
const ProductsScreen = () => {
  return (
    <>
      <AllHero title="Maxsulotlar" image={productsImg} />
      <ProductList />
    </>
  );
}

export default ProductsScreen