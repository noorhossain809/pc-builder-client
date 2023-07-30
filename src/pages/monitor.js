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

// export const getServerSideProps = async() => {
//  // const res = await fetch("https://pc-builder-server-phi.vercel.app/monitor")
//   const res = await fetch("https://pc-builder-pi-ten.vercel.app/monitor")
//   const data = await res.json()
//   return{
//     props :{
//       allMonitor: data
//     }
//   }
// }