"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
const MenuBar = ({ categories }) => {
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
          {categories?.map((category, i) => (
            <Nav.Link href={`/product?category_id=${category.id}`} key={i}>
              {category.name.toUpperCase()}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MenuBar;
