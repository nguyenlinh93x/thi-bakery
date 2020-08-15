import React from "react";
import "./styles.less";
import { Row, Col, List, Card } from "antd";
import Title from "antd/lib/typography/Title";
import { ImageScale } from "components";
import { Meta } from "antd/lib/list/Item";
import { Link, useHistory } from "react-router-dom";
import { convertToSlug } from "utils";

const data = [
  {
    title: "Bread & Pastry",
    img: "https://www.tljus.com/wp-content/uploads/2019/12/menu-bread.jpg",
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

export const Landing = () => {
  const history = useHistory();

  return (
    <>
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>
              Tiệm bánh Thị <span></span>
            </h1>
            <h1>
              Xin chào <span></span>
            </h1>
            <h1>
              Quý khách <span></span>
            </h1>
            <Link to="/" className="cta">
              Khám phá
            </Link>
          </div>
        </div>
      </section>
      {/* <section id="menu">
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
        <Row>
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
      </section> */}
    </>
  );
};
