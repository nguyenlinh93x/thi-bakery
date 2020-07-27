import React, { useState } from "react";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";
import { Button, Drawer } from "antd";

export const Navbar = () => {
  const [state, setState] = useState({
    current: "mail",
    visible: false,
  });

  const showDrawer = () => {
    setState((prev) => ({
      ...prev,
      visible: true,
    }));
  };

  const onClose = () => {
    setState((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className={"barsMenu"} type={"primary"} onClick={showDrawer} />
        <span className="barsBtn"></span>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={state.visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};
