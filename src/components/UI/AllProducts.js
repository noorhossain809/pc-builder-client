import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllProducts = ({ allProducts }) => {
    console.log(allProducts?.data);
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
       Featured Category
      </h1>
      <div className="grid grid-cols-4"
      
      >
        {allProducts?.data?.map((product) => (
          <div key={product._id} className="gutter-row"  span={5} style={{margin: 12}}>
            <div className="card bg-white pb-2">
               <Image
                  src={product?.image}
                  width={300}
                  height={200}
                  responsive
                  alt="product image"
                />
             <Link href={`/product/${product?._id}`}>
              <h2 className="tex-base mx-4 font-normal hover:text-red-600 hover:underline">{product?.productName}</h2>
             </Link>

              
              <div className="flex mx-4">
                <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color:  '#EF4A23',
                  margin: "10px 0px",
                  fontSize: "18px",
                  fontWeight: 600
                }}
              >
                {product?.price}
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "16px",
                }}
              >
                {product?.status}
              </p>
              </div>
              <Rate style={{marginLeft: '10px'}} allowHalf defaultValue={4.5} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <div className="mx-4">
                  {
                    product?.category?.map(item => (
                      <>
                      <p>{item?.motherboard}</p>
                      <p>{item?.ram}</p>
                      <p>{item?.powerSupplyUnit}</p>
                      <p>{item?.storageDevice}</p>
                      <p>{item?.monitor}</p>
                      <p>{item?.others}</p>
                      </>
                    ))
                  }
                </div>
              </div>

              <Link href={`/product/${product?._id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;