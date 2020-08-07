import React from "react";
import { Nav, Navbar, NavItem, Container } from "react-bootstrap";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import {
  BsFillHouseFill,
  BsFillBootstrapFill,
  BsFillQuestionOctagonFill,BsBriefcaseFill,BsFillGrid3X3GapFill
} from "react-icons/bs";
const Styles = styled.div`
  .navbar {
    background-color: #ade8f4;
  }
  .navlogo {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin:1px;
  }
  .navbar-brand,
  .nav-item,
  .navbar-nav,
  .nav-link {
    color: black;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
`;

export default function NavigBar() {
  return (
    <Styles>
      <Container>
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand aria-controls="responsive-navbar-nav" href="/">
          ODUNIX WEB CORP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link>
              <LinkContainer to="/">
                <NavItem className="navlogo">
                  <BsFillHouseFill />
                  HOME
                </NavItem>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link>
              <LinkContainer className="navlogo" to="/customers">
                <NavItem>
                  <BsBriefcaseFill />
                  CUSTOMERS
                </NavItem>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link>
              <LinkContainer className="navlogo" to="/invoices">
                <NavItem>
                  <BsFillGrid3X3GapFill />
                  INVOICES
                </NavItem>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link>
              <LinkContainer className="navlogo" to="/incomes">
                <NavItem>
                  <BsFillBootstrapFill />
                  BANK
                </NavItem>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link>
              <LinkContainer className="navlogo" to="/contact">
                <NavItem>
                  <BsFillQuestionOctagonFill />
                  CONTACT
                </NavItem>
              </LinkContainer>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
      </Styles>
  );
}
