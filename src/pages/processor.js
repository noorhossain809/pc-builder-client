import React from 'react';
import RootLayout from '../../components/layout/RootLayout';
import { useGetProcessorQuery } from '@/redux/api/apiSlice';
import ProductCard from '@/components/UI/ProductCard';

const Processor = () => {
  const {data: allProcessor} = useGetProcessorQuery()
  console.log("allProcessor", allProcessor);
    return (
        <div>
            {
              allProcessor?.data.map(cpu => <ProductCard key={cpu._id} product={cpu} />)
            }
        </div>
    );
};

export default Processor;

Processor.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}

// export const getStaticProps = async() => {
//   const res = await fetch("http://localhost:5000/processor")
//   const data = await res.json()
//   return{
//     props :{
//       allProcessor: data
//     }
//   }
// }