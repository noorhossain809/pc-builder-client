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
      <Row
      justify="center"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProducts?.data?.map((product) => (
          <Col key={product._id} className="gutter-row"  span={5} style={{margin: 12}}>
            <Card
              hoverable
               cover={
                <Image
                  src={product?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="product image"
                />
              }
            >
              <Meta title={product?.productName} />

              
              <div className="flex ">
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
              <Rate allowHalf defaultValue={4.5} />
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <div>
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
              </p>

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
                  Details <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllProducts;