import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { constants } from "../../utils";
import { changeSidebar } from "../../redux/sidebarSlice";

import Header from "../../components/header";
import LpTools from "../../components/lp-tools";
import Sidebar from "../../components/sidebar";

const LpToolsPage = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(changeSidebar("lp-main"));
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
            <LpTools />
          </Col>
          <Col lg={3}>
            <Sidebar />
          </Col>
        </Row>
      ) : (
        <>
          <Header />
          <LpTools />
        </>
      )}
    </>
  );
};

export default LpToolsPage;
