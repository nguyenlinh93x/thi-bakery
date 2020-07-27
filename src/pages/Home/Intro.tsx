import React from "react";
import { Row, Col, Carousel } from "antd";
import "./styles.less";
import {
  StepForwardOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const Arrow = ({ type, onClick }: { type: string; onClick: () => void }) => (
  <StepForwardOutlined />
);

export const Intro = () => {
  return (
    <Row>
      <Col className={"carousel-left"} span={24}>
        <Carousel
          autoplay
          arrows
          prevArrow={<ArrowLeftOutlined />}
          nextArrow={<ArrowRightOutlined />}
          autoplaySpeed={3500}
        >
          <div>
            {/* <div className={'test'} /> */}
            <img
              alt=""
              src="https://www.culinary-postcards.com/wp-content/uploads/2018/11/Fotor_15435654570267-930x350.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://www.kindred.co.uk/wp-content/uploads/2018/05/Energy-Balls-Vegetarian-Blog-930x350.png"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://www.culinary-postcards.com/wp-content/uploads/2017/02/IMG_20170205_214926-930x350.jpg"
            />
          </div>
        </Carousel>
      </Col>
      {/* <Col className={'carousel-right'} span={8}>
        <Carousel dotPosition={"right"}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Carousel>
      </Col> */}
    </Row>
  );
};
