import React from "react";
import "./App.less";
import { Landing } from "pages/Landing";
import { Header } from "components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Product } from "pages/Product";
import { Layout } from "antd";
import { ScrollToTop } from "components";
import { ProductDetail } from "pages/ProductDetail";

const { Footer } = Layout;
export const LandingPagePath = "/thi-bakery";

const AnimationApp = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300}>
        <Switch location={location}>
          <Route exact path="/">
            <Redirect to={LandingPagePath} />
          </Route>
          <Route path={LandingPagePath}>
            <Landing />
          </Route>
          <Route path="/product/:productName">
            <Product />
          </Route>
          <Route path={"*"}>
            <h1>404 Not Found</h1>
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
};

export default App;
