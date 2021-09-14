import { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import { constants } from "../utils";
import Sidebar from "../components/sidebar";
import PageContent from "./pageContent";

const Page = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return width > constants.width.mobile ? (
    <Row>
      <Col lg={9}>
        <PageContent {...props} />
      </Col>
      <Col lg={3}>
        <Sidebar />
      </Col>
    </Row>
  ) : (
    <PageContent {...props} />
  );
};

export default Page;
