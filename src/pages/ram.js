import { useGetRamQuery } from '@/redux/api/apiSlice';
import RootLayout from '../../components/layout/RootLayout';
import ProductCard from '@/components/UI/ProductCard';

const RamPage = () => {
  const {data: allRam} = useGetRamQuery()
    return (
        <div>
            {
              allRam?.data?.map(ram => <ProductCard key={ram._id} product={ram} />)
            }
        </div>
    );
};

export default RamPage;


RamPage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}