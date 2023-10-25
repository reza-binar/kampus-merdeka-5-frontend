import { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

function NavbarComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    useEffect(() => {
        if (token) {
            dispatch(getMe(navigate, null, "/login"));
        }
    }, [dispatch, navigate, token]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Movie Review
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Left Navbar */}
                    <Nav className="me-auto">
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/">
                                    Popular
                                </Nav.Link>
                                <Nav.Link as={Link} to="/search">
                                    Search
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                    {/* Right Navbar */}
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/myprofile">
                                    {user?.name}
                                </Nav.Link>
                                <Nav.Link as={Button} onClick={onLogout}>
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
