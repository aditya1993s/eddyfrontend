import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import ServerAddForm from "../ServerAddForm";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [server, setServer] = React.useState(true);
  let navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setServer(true);
    setShow(true);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Server Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ServerAddForm modalClose={handleClose} />
        </Modal.Body>
      </Modal>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Server Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link style={{ marginTop: "-15px" }}>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{ marginTop: "15px" }}
                >
                  Add Server
                </Button>
              </Nav.Link>
              {/* <Nav.Link style={{ marginTop: "-15px" }}>
                <Button
                  variant="info"
                  onClick={handleShow}
                  style={{ marginTop: "15px" }}
                >
                  Add User
                </Button>
              </Nav.Link> */}
              {/* <Nav.Link style={{ marginTop: "-15px" }}>
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  style={{ marginTop: "15px" }}
                >
                  Logout
                </Button>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
