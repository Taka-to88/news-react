import React from "react";
import {
  Navbar,
  Button,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

function Header() {
  return (
    <Container>
      <img
        src={`${process.env.PUBLIC_URL}/header.png`}
        class="img-fluid"
        alt="header"
      />
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
export default Header;
