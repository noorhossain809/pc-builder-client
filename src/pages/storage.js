import { useGetStorageQuery } from "@/redux/api/apiSlice";
import RootLayout from "../../components/layout/RootLayout";
import ProductCard from "@/components/UI/ProductCard";

const StoragePage = () => {
  const {data: allStorage} = useGetStorageQuery()
    return (
        <div>
             {
              allStorage?.data?.map(storage => <ProductCard key={storage._id} product={storage} />)
             }
        </div>
    );
};

export default StoragePage;

StoragePage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}