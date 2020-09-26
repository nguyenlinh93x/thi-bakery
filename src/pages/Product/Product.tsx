import React from "react";
import "./styles.less";
import { Breadcrumb } from "antd";
import { itemRender, routes } from "routes";
import { useLocation, Switch, Route, useRouteMatch } from "react-router-dom";
import { Cakes } from "./Cakes";
import { ProductDetail } from "pages/ProductDetail";

export const Product = () => {
  const { state } = useLocation<{
    id: number;
    title: string;
    img: string;
  }>();
  const { url, path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <section
            id="product"
            // style={{ backgroundImage: `url(${state.img})` }}
          >
            <div className="background"></div>
          </section>
          <Breadcrumb
            style={{
              marginLeft: "16px",
              marginTop: "24px",
              marginBottom: "24px",
            }}
            itemRender={(...props) => {
              props.push(state.title);
              return itemRender(...props);
            }}
            routes={routes}
          />
          <Cakes />
        </Route>
        <Route path={`${path}/:slug`}>
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
};
