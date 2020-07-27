import React from "react";
import { Cakes } from "pages/Home";
import "./styles.less";
import { Breadcrumb } from "antd";
import { itemRender, routes } from "routes";
import { useLocation } from "react-router-dom";

export const Product = () => {
  const { state } = useLocation<{
    id: number;
    title: string;
    img: string;
  }>();

  return (
    <>
      <section
        id="product"
        // style={{ backgroundImage: `url(${state.img})` }}
      >
        <div className="background"></div>
      </section>
      <Breadcrumb
        style={{ marginLeft: "16px", marginTop: "24px", marginBottom: "24px" }}
        itemRender={(...props) => {
          props.push(state.title);
          return itemRender(...props);
        }}
        routes={routes}
      />
      <Cakes />
    </>
  );
};
