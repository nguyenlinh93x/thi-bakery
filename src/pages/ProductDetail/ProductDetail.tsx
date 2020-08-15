import React from "react";
import "./styles.less";
import { Row, Col, Select } from "antd";
import { useWindowSize } from "components";
import { Typography } from "antd";
import ImageGallery from "react-image-gallery";

const { Title, Text } = Typography;
const { Option } = Select;

const images = [
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/Birthday_Cake_6in_Overhead-1_800x.jpg?v=1579840506",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/Birthday_Cake_6in_Overhead-1_150x.jpg?v=1579840506",
  },
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/Bday_Baller_Rollover_b2ae2416-669a-4cf3-9f7e-6f7b1404c912_800x.jpg?v=1587076831",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/Bday_Baller_Rollover_b2ae2416-669a-4cf3-9f7e-6f7b1404c912_150x.jpg?v=1587076831",
  },
  {
    original:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/NewYears-Web-12-BdayCake_rollover_822ec8c4-553b-47ec-8890-930b7a549c61_800x.jpg?v=1579840506",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0034/7550/5225/products/NewYears-Web-12-BdayCake_rollover_822ec8c4-553b-47ec-8890-930b7a549c61_150x.jpg?v=1579840506",
  },
  {
    original:
      "https://res.cloudinary.com/dvsychzia/video/upload/vc_auto,q_70,w_1500/v1553279918/Square%20Clips/BdayCAKEPDP_SQUARE2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dvsychzia/video/upload/v1553279918/Square%20Clips/BdayCAKEPDP_SQUARE2.jpg",
  },
];

export const ProductDetail = () => {
  const { width } = useWindowSize();

  return (
    <section id="product-detail">
      <Row>
        <Col md={14}>
          <ImageGallery
            items={images}
            thumbnailPosition={width && width >= 576 ? "left" : "bottom"}
            showPlayButton={false}
            showNav={false}
          />
        </Col>
        <Col md={10} className={"info-container"}>
          <Title level={1}>Mochi</Title>
          <Title level={3} type={"secondary"}>
            450.000 VND
          </Title>
          <Text type={"secondary"}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </Text>
          <div className={"size-container"}>
            <Text className={"title"} strong>
              Size
            </Text>
            <Select
              defaultValue="lucy"
              style={{ width: "80%" }}
              onChange={() => {}}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </section>
  );
};
