import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { constants } from "../../utils";
import { changeSidebar } from "../../redux/sidebarSlice";

import Header from "../../components/header";
import DashboardUI from "../../components/dashboard-ui";
import Sidebar from "../../components/sidebar";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(changeSidebar("dashboard-all"));
  });

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {width > constants.width.mobile ? (
        <Row>
          <Col lg={9}>
            <Header />
            <DashboardUI />
          </Col>
          <Col lg={3}>
            <Sidebar />
          </Col>
        </Row>
      ) : (
        <>
          <Header />
          <DashboardUI />
        </>
      )}
    </>
  );
};

export default DashboardPage;
