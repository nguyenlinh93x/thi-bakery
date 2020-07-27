import React from "react";
import { Link } from "react-router-dom";

export const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/product/:id",
    breadcrumbName: "Product",
  },
];

export function itemRender(
  route: any,
  params: any,
  routes: Array<any>,
  paths: Array<string>,
  replaceLastRouteName?: string
) {
  const last = routes.indexOf(route) === routes.length - 1;

  return last ? (
    <span style={{ fontWeight: "bold" }}>
      {replaceLastRouteName || route.breadcrumbName}
    </span>
  ) : (
    <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
  );
}
