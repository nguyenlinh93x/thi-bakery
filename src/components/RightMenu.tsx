import React from "react";
import { Menu } from "antd";

export const RightMenu = () => {
  return (
    <Menu mode={"horizontal"}>
      <Menu.Item key={"mail"}>
        <a href="">Sign In</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">Sign Up</a>
      </Menu.Item>
    </Menu>
  );
};
