import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Home from "../Home/Home";

function Header() {
  return (
    <div>
      <div className="container-header">
        <br />
        <div className="logo">
          <img src="https://i.ibb.co/hgv3MYK/Bangladesh-xl.gif" alt="" />
        </div>
        <h3>চিথুলিয়া দিগর মুহিয়ে সুন্নাহ আলিম মাদ্রাসা</h3>
        <h5>মোল্লার চর,গাইবান্ধা সদর,গাইবান্ধা</h5>
        <h6>EIIN NO-121173| Madrasah Code: 11246</h6>
        স্থাপিত: ১৯৮০ ইং
      </div>

      {/* Navbar */}
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
        
          className=" sticky-top  navbar navbar-dark bg-dark  mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              navbarScroll
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link herf="/ad">Home</Nav.Link>
                  <Nav.Link href="/home">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    style={{ backgroundColor: "white" }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* Notice Scroll */}
      <marquee className="notice" behavior="" direction="">
        <a href="/">
          {" "}
          চিথুলিয়া দিগর মুহিয়ে সুন্নাহ আলিম মাদ্রাসা ওয়েবসাইটে আপনাকে স্বাগতম!{" "}
        </a>
      </marquee>
      <Home/>
    </div>
  );
}

export default Header;
