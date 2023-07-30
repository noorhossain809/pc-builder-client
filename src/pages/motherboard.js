import React from 'react';
import RootLayout from '../../components/layout/RootLayout';
import { useGetMotherboardQuery } from '@/redux/api/apiSlice';
import ProductCard from '@/components/UI/ProductCard';

const MotherboardPage = () => {
  const {data: allMotherboard} = useGetMotherboardQuery()
    return (
        <div>
            {
              allMotherboard?.data?.map(motherboard => <ProductCard key={motherboard._id} product={motherboard} />)
            }
        </div>
    );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}