import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function CustomNavbar({ image,color }) {
  const userName = JSON.parse(localStorage.getItem("userName"));
  const Navigate = useNavigate()
  const handleClick = () => {
    localStorage.clear()
    Navigate("/login")
    window.location.reload()

  }
  return (
    <Navbar className="fixed-top" expand="lg" style={{background:color}}>
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="logo">
            <img src={image} alt="imagee" className="logo-img" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <span className="me-3 fw-semibold"> Hello {userName}</span>
            <Button className="button" onClick={handleClick}>Logut</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
