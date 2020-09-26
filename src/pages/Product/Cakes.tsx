import React from "react";
import { Typography, Row, Col, List, Card, Tooltip } from "antd";
import "./styles.less";
import Meta from "antd/lib/card/Meta";
import { ImageScale } from "components";
import {
  FacebookOutlined,
  EyeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouteMatch, useHistory } from "react-router-dom";
import { convertToSlug } from "utils";

export interface Product {
  title: string;
  price: number;
  img: string;
}

const data: Product[] = [
  {
    title: "Cake 1",
    price: 450000,
    img:
      "https://livforcake.com/wp-content/uploads/2017/06/vanilla-cake-thumb-500x500.jpg",
  },
  {
    title: "Cake 2",
    price: 450000,
    img:
      "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg",
  },
  {
    title: "Cake 3",
    price: 450000,
    img:
      "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg",
  },
  {
    title: "Cake 4",
    price: 450000,
    img:
      "https://i.pinimg.com/originals/f9/62/8f/f9628fe466dbde785e709976000fe402.jpg",
  },
  {
    title: "Cake 5",
    price: 450000,
    img:
      "https://sugargeekshow.com/wp-content/uploads/2020/03/rainbow-cake-featured-scaled.jpg",
  },
  {
    title: "Cake 6",
    price: 450000,
    img:
      "https://img.taste.com.au/-RGbsS2h/taste/2019/05/chocolate-and-nutella-smores-cake-149475-2.jpg",
  },
  {
    title: "Cake 7",
    price: 450000,
    img:
      "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/07/pick-and-mix-choc-cake.jpg",
  },
  {
    title: "Cake 8",
    price: 450000,
    img:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk",
  },
];

export const Cakes = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const moveDetail = (item: Product) => {
    history.push(`${match.url}/${convertToSlug(item.title)}`, {
      item,
    });
  };

  return (
    <Row>
      <Col span={24}>
        {/* <Title level={3}>Bông Lan Trứng Muối</Title>
        <Col span={8} offset={8}>
          <Divider style={{ width: "50%" }} plain>
            Hương vị của mọi nhà
          </Divider>
        </Col> */}
        {/* <Title
          style={{
            textAlign: "left",
            marginBottom: "16px",
            paddingLeft: '16px',
            marginTop: '16px'
          }}
          level={3}
        >
          Menu
        </Title> */}
        <List
          itemLayout="vertical"
          grid={{ gutter: 16, column: 4, xs: 1 }}
          dataSource={data}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 8,
          }}
          renderItem={(item) => (
            <List.Item onClick={() => moveDetail(item)}>
              <Card
                // title={item.title}
                cover={
                  <ImageScale
                    style={{ height: "200px" }}
                    alt="example"
                    src={item.img}
                  />
                  // <img
                  //   style={{ height: '200px' }}
                  //   alt="example"
                  //   src={item.img}
                  // />
                }
                actions={[
                  <Tooltip title="Tới Facebook">
                    <FacebookOutlined key="fb" />
                  </Tooltip>,
                  <Tooltip title="Gọi đặt hàng">
                    <PhoneOutlined key="call" />
                  </Tooltip>,
                  <Tooltip title="Xem chi tiết">
                    <EyeOutlined key="view" />
                  </Tooltip>,
                ]}
              >
                <Meta
                  // avatar={
                  //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  // }
                  title={item.title}
                  description={
                    <span>
                      {item.price} <sup>VND</sup>
                    </span>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
