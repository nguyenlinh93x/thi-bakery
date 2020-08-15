import React from "react";
import "./styles.less";
import { Row, Col, List, Card } from "antd";
import { ImageScale } from "components";
import { Meta } from "antd/lib/list/Item";
import { Link, useHistory } from "react-router-dom";
import { convertToSlug } from "utils";
import { Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    title: "BTLM",
    img: require("assets/img/btlm-cat.jpg"),
  },
  {
    title: "Beverages",
    img: "https://www.tljus.com/wp-content/uploads/2019/12/menu-light-meal.jpg",
  },
  {
    title: "Catering",
    img: "https://www.tljus.com/wp-content/uploads/2019/12/menu-catering.jpg",
  },
];

export const LandingLeft = () => {
  const history = useHistory();

  return (
    <>
      <section id="landing-left">
        <Row>
          <Col
            xl={10}
            lg={0}
            order={14}
            className={"left-part"}
            // style={{ backgroundColor: "rgb(141 143 154 / 33%)", width: "100%" }}
          >
            <div className="container">
              <div>
                <img src={require("assets/img/thi-logo2.gif")} />
                <Title>
                  <Link to={""}>
                    Bánh cùng Thị nha <span></span>
                  </Link>
                </Title>
                <Title>
                  <Link to={""}>
                    Làm bánh cùng Thị <span></span>
                  </Link>
                </Title>
                <Title>
                  <Link to={""}>
                    Một chút về Thị <span></span>
                  </Link>
                </Title>
                <Title>
                  <Link to={""}>
                    Kết nối Thị nào <span></span>
                  </Link>
                </Title>
                {/* <Link to="/" className="cta">
                  Khám phá
                </Link> */}
              </div>
            </div>
          </Col>
          <Col className={"right-part"} xl={14} lg={24} order={10}>
            {/* <div className={'banner'} /> */}
            <img
              src={require("assets/img/banner4.jpg")}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </section>
      <section id="menu">
        <Title
          style={{
            textAlign: "left",
            marginTop: "16px",
            marginBottom: "16px",
            paddingLeft: "16px",
          }}
          level={3}
        >
          Menu
        </Title>
        <Row style={{ overflow: "hidden" }}>
          <Col span={24}>
            <List
              itemLayout={"vertical"}
              grid={{ gutter: 16, column: 3, md: 2, xs: 1 }}
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item
                  onClick={() =>
                    history.push({
                      pathname: `/product/${convertToSlug(item.title)}`,
                      state: {
                        id: index,
                        title: item.title,
                        img: item.img,
                      },
                    })
                  }
                >
                  <Card
                    cover={
                      <ImageScale
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt="example"
                        src={item.img}
                      />
                    }
                  >
                    <Meta
                      style={{ textAlign: "center" }}
                      title={
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "2rem",
                            color: "crimson",
                          }}
                        >
                          {item.title}
                        </span>
                      }
                    />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </section>
    </>
  );
};
