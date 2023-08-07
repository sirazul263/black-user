"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
const MenuBar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="#features">NEW ARRIVAL!</Nav.Link>
          <Nav.Link href="#pricing">AVAILABLE COLLECTION</Nav.Link>
          <Nav.Link href="#pricing">BLACK OFFICIAL CLOTH</Nav.Link>
          <Nav.Link href="#pricing">CURVED VISOR CAP</Nav.Link>
          <Nav.Link href="#pricing">FLAT DISCOUNT%</Nav.Link>{" "}
          <Nav.Link href="#pricing">BASIC CAP</Nav.Link>{" "}
          <Nav.Link href="#pricing">MAN CLOTH</Nav.Link>{" "}
          <Nav.Link href="#pricing">WOMEN CLOTH</Nav.Link>
          <Nav.Link href="#pricing">KIDS CLOTH</Nav.Link>
          <Nav.Link href="#pricing">BKASH PAYMENT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MenuBar;
