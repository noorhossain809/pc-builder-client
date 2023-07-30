import React from 'react';
import RootLayout from '../../components/layout/RootLayout';
import { useGetPowerSupplyQuery } from '@/redux/api/apiSlice';
import ProductCard from '@/components/UI/ProductCard';

const PowerSupplyPage = () => {
  const {data: allPowerSupply} = useGetPowerSupplyQuery()
    return (
        <div>
            {
              allPowerSupply?.data?.map(power => <ProductCard key={power._id} product={power} />)
            }
        </div>
    );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}