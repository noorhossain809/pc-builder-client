import Image from "next/image";
import RootLayout from "../../../components/layout/RootLayout";

const ProductDetails = ({ product }) => {
  console.log("product details", product);
  return (
    <div
      className="grid grid-cols-2"
      style={{ marginTop: "80px", alignItems: "center" }}
    >
      <div>
        <Image
          alt="example"
          src={product?.data?.image}
          width={500}
          height={300}
          responsive
        />
      </div>
      <div className="">
        <h1 className="font-[Trebuchet MS sans-serif] text-xl font-normal">
          {product?.data?.productName}
        </h1>
        <div className="flex gap-x-6 mt-0">
          <p className=" text-gray-600 bg-[rgba(55,73,187,.05)] p-1 px-6 rounded-full text-center ">Price: <span className=" text-gray-950 uppercase font-semibold">{ product?.data?.price}</span></p>
         <p className=" text-gray-600 bg-[rgba(55,73,187,.05)] p-1 px-6 rounded-full text-center ">Status: <span className=" text-gray-950 uppercase font-semibold">{ product?.data?.status}</span></p>
        </div>

        <p className="font-[Trebuchet MS sans-serif] font-normal text-lg mt-0 space-y-0">
          Individual Rating: {product?.data?.individualRating}
        </p>
        <p className="font-[Trebuchet MS sans-serif] font-normal text-lg mt-0 space-y-0">
          Average Rating: {product?.data?.averageRating}
        </p>
        <h3>Key Features</h3>
        <div className="list-none text-base font-[Trebuchet MS sans-serif] space-y-0">
          {product?.data?.keyFeatures.map((feature) => (
            <>
              <p className="space-y-0 mt-0 text-gray-600">Brand: <span className="bg-[rgba(55,73,187,.05)] p-1 px-6 rounded-full text-gray-950 uppercase font-semibold">{feature?.brand}</span></p>
              <p>{feature?.model}</p>
              <p> {feature?.port}</p>
              <p> {feature?.resolution}</p>
              <p> {feature?.specification}</p>
              <p> {feature?.type}</p>
              <p> {feature?.voltage}</p>
            </>
          ))}
        </div>
        <h3>Reviews</h3>
        <ul className="list-none text-base font-[Trebuchet MS sans-serif] text-left">
          {product?.data?.reviews?.map((review) => (
            <>
              <li className="text-left">{review}</li>
            </>
          ))}
        </ul>
        <p className="font-[Trebuchet MS sans-serif] font-normal text-base">
          {product?.data?.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://pc-builder-server-phi.vercel.app/product/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
