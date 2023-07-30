import { useGetMonitorQuery } from "@/redux/api/apiSlice";
import RootLayout from "../../components/layout/RootLayout";
import ProductCard from "@/components/UI/ProductCard";


const MonitorPage = () => {
  const {data: allMonitor} = useGetMonitorQuery()

    return (
        <div>
            {
              allMonitor?.data?.map(monitor => <ProductCard key={monitor._id} product={monitor} />)
            }
        </div>
    );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}