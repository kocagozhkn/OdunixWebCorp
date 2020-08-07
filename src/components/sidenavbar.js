import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Dashboard.css";

const Side = props => {
  return (
    <Navbar>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky" />
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
//const Sidebar = withRouter(Side);
export default Side;
