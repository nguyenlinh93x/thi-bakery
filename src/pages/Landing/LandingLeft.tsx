import React from "react";
import "./styles.less";
import { Row, Col, List, Card } from "antd";
import { ImageScale } from "components";
import { Meta } from "antd/lib/list/Item";
import { Link, useHistory } from "react-router-dom";
import { convertToSlug } from "utils";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const data = [
  {
    title: "BTLM",
    img: require("assets/img/btlm-cat.jpg"),
  },
  {
    title: "Flan Gato",
    img: require("assets/img/flan-gato/4.jpg"),
  },
  {
    title: "Flower Cupcake",
    img: require("assets/img/flower-cupcake/thumbnail.jpg"),
  },
  {
    title: "Healthy Cake",
    img: require("assets/img/healthy-cake/thumbnail.jpg"),
  },
  {
    title: "Roll Cake",
    img: require("assets/img/roll-cake/thumbnail.jpg"),
  },
];

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

export const LandingLeft = () => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: "rgb(255 222 173 / 39%)" }}>
      <section id="landing-left">
        <Row>
          <Col
            xl={10}
            lg={0}
            md={0}
            xs={0}
            order={14}
            className={"left-part"}
            // style={{ backgroundColor: "rgb(141 143 154 / 33%)", width: "100%" }}
          >
            <div className="container">
              <div>
                <img src={require("assets/img/thi-logo2.gif")} />
                <Title>
                  <a href={"#menu"}>
                    Bánh cùng Thị nha <span></span>
                  </a>
                </Title>
                <Title>
                  <a href={"#introduce"}>
                    Một chút về Thị <span></span>
                  </a>
                </Title>
                <Title>
                  <a href={"#do-cake"}>
                    Làm bánh cùng Thị <span></span>
                  </a>
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
          <Col
            className={"right-part"}
            xl={14}
            lg={24}
            md={24}
            xs={24}
            order={10}
          >
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
            textAlign: "center",
            paddingTop: "84px",
            marginBottom: "50px",
            paddingLeft: "16px",
          }}
          level={2}
        >
          Bánh cùng Thị nha
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

      {/* Introduce */}
      <section id="introduce">
        <Row style={{ paddingTop: "160px" }}>
          <Col xl={8} md={24} className={"content"}>
            <Title>Một chút về Thị</Title>
            <Paragraph style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              lacus urna. In facilisis, sem et convallis fringilla, magna massa
              egestas eros, ut volutpat leo elit ut lacus. Vivamus lobortis
              lorem vel blandit sollicitudin. Nunc leo metus, tincidunt eget
              porttitor vel, luctus nec risus. Donec mollis lacus eu augue
              dictum efficitur. Curabitur luctus facilisis diam vel ornare.
              Praesent id placerat sapien, sit amet bibendum tellus. Nam a est
              ornare nunc ultricies finibus. Aenean sit amet mollis nisl.
              Pellentesque sodales eleifend nibh quis sagittis. In sollicitudin
              facilisis auctor
            </Paragraph>
            <Paragraph>
              Vestibulum eleifend vitae purus et sodales. Nunc a placerat
              libero, non congue urna. Maecenas feugiat condimentum nulla, ut
              bibendum lectus hendrerit in. Sed elementum, risus a fermentum
              egestas, est leo ullamcorper velit, a bibendum velit leo ac velit.
              Pellentesque pellentesque aliquet rhoncus. Sed maximus, sem et
              pellentesque maximus, elit purus suscipit turpis, viverra
              facilisis ante sem eu tellus. Vivamus eu ligula ultrices, pulvinar
              sem sit amet, pellentesque magna.
            </Paragraph>
          </Col>
          <Col xl={16} md={24}>
            <img
              src={require("assets/img/introduce.jpg")}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </section>

      {/* Do Cake */}
      <section id="do-cake">
        <Row>
          <Col span={12}>
            <img
              src={require("assets/img/docake.jpg")}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Col>
          <Card
            title="Làm bánh cùng Thị"
            className={"card"}
            style={{ width: "30%" }}
            // bordered={false}
          >
            <ul>
              <li>
                <a>
                  <p>Content 1</p>
                </a>
              </li>
              <li>
                <a>
                  <p>Content 2</p>
                </a>
              </li>
              <li>
                <a>
                  <p>Content 3</p>
                </a>
              </li>
              <li>
                <a>
                  <p>Content 4</p>
                </a>
              </li>
              <li>
                <a>
                  <p>Content 5</p>
                </a>
              </li>
              <li>
                <a>
                  <p>Content 6</p>
                </a>
              </li>
            </ul>
          </Card>
        </Row>
      </section>
    </div>
  );
};
