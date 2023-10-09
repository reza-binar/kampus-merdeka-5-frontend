import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Movie Review
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/search">
                            Search Movie
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="right-navbar" />
                <Navbar.Collapse id="right-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
