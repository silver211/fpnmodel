/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import WelcomeNavbar from "components/Navbars/WelcomeNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import WelcomeFooter from "components/Footers/WelcomeFooter.js";

import routes from "routes.js";

class Auth extends React.Component {
  componentDidMount() {
    //document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    //document.body.classList.remove("bg-default");
  }
  /*
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  */
  render() {
    return (
      <>
        <div className="main-content">
          <WelcomeNavbar />
          {/*<div className="header bg-gradient-info py-7 py-lg-8">*/}
          <div className="header  py-7 pt-lg-8 pb-lg-4">


            <Container>
              <div className="header-bod text-center ">
                <Row className="justify-content-center">
                  <Col lg="12" md="6">
                    <h1 className="text-black">Digital Banking Serves Chinese Community</h1>
                    <p className="text-lead text-dark">
                      We make foreign currency digital banking so easy.
                    </p>
                    <div>
                    <img alt="..."
                    style={{position:"relative"}}
                    src={require("assets/img/Bg/nemoCard.png")}
                    width="100%"
                    />
                    <button style={{position:"absolute",top:"40%",left:"15%",backgroundColor:"#21a0ce"}}>Pre-Register</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/*
              <div className="separator separator-bottom separator-skew zindex-100">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>

            </div>*/}
          </div>
          {/* Page content */}

          <Container>
            <div className=" text-center  bg-light mb-3" >
              <Row className="justify-content-center">
                <Col lg="12" md="6">
                  <h1 className="text-black">NEMO FInTech is a mobile banking app and debit card made awesome.</h1>




                  <p className="text-lead text-dark">
                    ✅ Simple sign up takes only couple clicks
                  </p>


                  <p className="text-lead text-dark">
                    ✅ No hidden bank fees
                  </p>


                  <p className="text-lead text-dark">
                    ✅ Help you achieve your financial goal
                  </p>


                  <p className="text-lead text-dark">
                    ✅ Banking on your mobile
                  </p>



                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className=" text-center mb-3 " >
              <Row className="justify-content-center">

                  <h1 className="text-black">Security and Control</h1>
              </Row>
              <Row>
              <Col lg="3" md="3" sm="6" xs="12">
              <img
              alt=""
              src={require("assets/img/icons/nemo/Security/deposit.png")}
              width="30%"
              />
                <Row className="justify-content-center">Your deposits are</Row>
                <Row className="justify-content-center">insured up to</Row>
                 <Row className="justify-content-center">$250,000 Member</Row>
                 <Row className="justify-content-center">FDIC.</Row>
              </Col>
              <Col lg="3" md="3" sm="6" xs="12">
              <img
              alt=""
              src={require("assets/img/icons/nemo/Security/location.png")}
              width="30%"
              />
                <Row className="justify-content-center">Over 38,000 fee</Row>
                <Row className="justify-content-center">-free ATMs</Row>
                 <Row className="justify-content-center">locations.</Row>
                 <Row className="justify-content-center"></Row>
              </Col>
              <Col lg="3" md="3" sm="6" xs="12">
                <img
                alt=""
                src={require("assets/img/icons/nemo/Security/purchase.png")}
                width="30%"
                />
                <Row className="justify-content-center">Visa's Zero-Liability</Row>
                <Row className="justify-content-center">Policy protects all</Row>
                 <Row className="justify-content-center">unauthorized</Row>
                 <Row className="justify-content-center">purchases.</Row>
              </Col>
              <Col lg="3" md="3" sm="6" xs="12">

              <img
              alt=""
              src={require("assets/img/icons/nemo/Security/alert.png")}
              width="30%"
              />
                <Row className="justify-content-center">Real-time alerts for</Row>
                <Row className="justify-content-center">every banking</Row>
                 <Row className="justify-content-center">transaction.</Row>
                 <Row className="justify-content-center"></Row>
              </Col>
              </Row>
            </div>
          </Container>

          <Container className=" bg-light text-center pb-5 pt-5" >
          <div height="50">
          <button style={{backgroundColor:"#21a0ce"}}>Pre-Register</button>
          </div>
          </Container>

          <Container className=" text-center " >
          <p>Banking Services provided by The Bancorp Bank or Stride Bank, N.A.,
           Members FDIC. The Nemo Visa® Debit Card is issued by
           The Bancorp Bank or Stride Bank pursuant to a license
           from Visa U.S.A. Inc. and may be used everywhere Visa
           debit cards are accepted. The Nemo Visa® Credit Builder
           Card is issued by Stride Bank pursuant to a license from Visa U.S.A.
            Inc. and may be used everywhere Visa credit cards are accepted.
            Please see back of your Card for its issuing bank.</p>

          </Container>

          {/*
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="*" to="/auth/login" />
              </Switch>
            </Row>
          </Container>*/}
        </div>
        <WelcomeFooter />
      </>
    );
  }
}

export default Auth;
