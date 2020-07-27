import React from "react";
import "./App.less";
import { Landing } from "pages/Landing";
import { Header } from "components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Product } from "pages/Product";
import { Layout } from "antd";
import { ScrollToTopOnMount, ScrollToTop } from "components";

const { Footer } = Layout;

const AnimationApp = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300}>
        <Switch location={location}>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/product/:productName">
            <Product />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App: React.FC = () => {
  // const location = useLocation();

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Header />
        <Switch>
          {/* <Route exact path="/">
          <Redirect to="/menu" />
        </Route> */}
          <Route path="*">
            <AnimationApp />
          </Route>
        </Switch>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
  // return (
  //   <Layout>
  //     <Sider
  //       breakpoint={"xxl"}
  //       zeroWidthTriggerStyle={{ backgroundColor: "red" }}
  //       collapsedWidth={0}
  //       onBreakpoint={(broken) => console.log(broken)}
  //       onCollapse={(collapsed, type) => {
  //         console.log(collapsed, type);
  //       }}
  //     >
  //       {/* <div className="logo" /> */}
  //       <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
  //         <Menu.Item key="1" icon={<UserOutlined />}>
  //           nav 1
  //         </Menu.Item>
  //         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
  //           nav 2
  //         </Menu.Item>
  //         <Menu.Item key="3" icon={<UploadOutlined />}>
  //           nav 3
  //         </Menu.Item>
  //         <Menu.Item key="4" icon={<UserOutlined />}>
  //           nav 4
  //         </Menu.Item>
  //       </Menu>
  //     </Sider>
  //     <Layout>
  //       <Header className="header" style={{ padding: 0, zIndex: 999 }}>
  //         <Avatar
  //           className="logo"
  //           src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/79307449_3328645353820842_160945127688423750_o.png?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQmAYU_4eaJYVtzF78LvqCOSEILlXA4YNaxhSBYEu6EgdZMnvMkYuwMUcFHFwRVw5CM&_nc_ht=scontent.fsgn2-3.fna&oh=ae8d79e7d2b0ea2923db490ead4cfcc0&oe=5F358640"
  //         />
  //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
  //           <Menu.Item key="1">Trang chủ</Menu.Item>
  //           <Menu.Item key="2">Khuyến mãi</Menu.Item>
  //           <Menu.Item key="3">Liên hệ</Menu.Item>
  //         </Menu>
  //         {/* <Avatar style={{ float: 'right' }} icon={<UserOutlined />} /> */}
  //       </Header>
  //       <Content>
  //         <div
  //           className="site-layout-background"
  //           style={{ minHeight: 360 }}
  //         >
  //           <Intro />
  //           <Cakes />
  //           <Cakes />
  //           <Cakes />
  //         </div>
  //       </Content>
  //       <Footer style={{ textAlign: "center" }}>
  //         Ant Design ©2018 Created by Ant UED
  //       </Footer>
  //     </Layout>
  //   </Layout>
  // );
};

export default App;
