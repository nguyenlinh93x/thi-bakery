import React from "react";
import { Typography, Row, Col, Dropdown, Button, Menu, Select } from "antd";
import "./styles.less";
import ImageGallery from "react-image-gallery";
import { useWindowSize } from "components";
import { useLocation } from "react-router-dom";
import { Product } from "pages/Home";
import { numberWithCommas, numberWithDots } from "utils";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const images = [
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1050x1050_0003_PBB-CAKE__0000_ColorBalance1_800x.jpg?v=1590783520",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1050x1050_0003_PBB-CAKE__0000_ColorBalance1_800x.jpg?v=1590783520",
  },
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1050x1050_0000_PBB-CAKE__0003_ColorBalance1copy3_800x.jpg?v=1590984989",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1050x1050_0000_PBB-CAKE__0003_ColorBalance1copy3_800x.jpg?v=1590984989",
  },
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1050x1050_0002_PBB-CAKE__0001_ColorBalance1copy_800x.jpg?v=1590984989",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1050x1050_0002_PBB-CAKE__0001_ColorBalance1copy_800x.jpg?v=1590984989",
  },
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/02-cake-slice_800x.gif?v=1590783595",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/02-cake-slice_800x.gif?v=1590783595",
  },
];

const menu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

export const ProductDetail = () => {
  const windowSize = useWindowSize();
  const {
    state: { item },
  } = useLocation<{
    item: Product;
  }>();

  return (
    <section id="product-detail">
      <Row>
        <Col md={14} xs={24} className={"product-gallery"}>
          <ImageGallery
            lazyLoad={true}
            showNav={false}
            thumbnailPosition={
              windowSize.width && windowSize.width > 576 ? "left" : "bottom"
            }
            showPlayButton={false}
            showBullets
            useBrowserFullscreen
            showThumbnails={true}
            items={images}
            slideOnThumbnailOver
          />
        </Col>
        <Col md={10} xs={24} className={"product-info"}>
          <Title>{item.title}</Title>
          <Title level={3} type="secondary">
            {numberWithDots(item.price)} VNĐ
          </Title>
          <Text type="secondary">
            Milk Bar products are prepared fresh and ship directly Monday -
            Saturday using our tried-and-true packing methods to ensure a safe
            journey.
          </Text>
          <div className={"size"}>
            <Text strong className={"label"}>
              Size
            </Text>
            <Select
              defaultValue="1"
              style={{ width: "80%" }}
              onChange={() => {}}
            >
              <Select.Option value="1">1-inch</Select.Option>
              <Select.Option value="2">2-inch</Select.Option>
              <Select.Option value="3">3-inch</Select.Option>
            </Select>
          </div>
          <div style={{ marginTop: "60px" }}>
            <Button type="primary">Đặt ngay</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};
