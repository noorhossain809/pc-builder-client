import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import bannerImg from "@/assets/images/desktop-deal-live-now-home-banner-982x500 (1).png";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <Carousel
    effect="fade"
    justify="center"
    autoplay
    style={{ margin: "20px 0px", padding: "20px" }}
  >
    {/* slider-1 */}
    <div>
      <Row justify="center">
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>PC-BUILDER</h1>
          <p style={{ fontSize: "20px" }}>
            Welcome to our PC Builder Shop, where technology enthusiasts and
            novices alike come together to create their dream custom computers!
            We are a one-stop destination for all your computer hardware needs,
            offering a vast selection of top-quality components and peripherals
            to build the perfect PC tailored to your specific requirements.
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image src={bannerImg} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row justify="center">
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Product Variety</h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>
          <p style={{ fontSize: "20px" }}>
            At PC Builder Shop, we take pride in offering an extensive range of
            computer parts from leading manufacturers. Whether you are a gamer,
            content creator, professional, or simply looking to upgrade your
            system, we have got you covered. Our inventory includes the latest
            CPUs, graphics cards, motherboards, RAM, storage drives, power
            supplies, cooling solutions, cases, and more.
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src={bannerImg}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
