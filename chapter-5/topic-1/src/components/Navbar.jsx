import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function NavbarComponent() {
    const [user, setUser] = useState(null);

    const logout = (event) => {
        event.preventDefault();

        localStorage.removeItem("token");

        // Redirect to home or reload the home
        // This is temporary solution, the better solution is using redux
        window.location.replace("/");
    };

    useEffect(() => {
        const getMe = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/auth/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { data } = response.data;

                // Set the user state from API data
                setUser(data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.message);
                    return;
                }

                alert(error?.message);
            }
        };

        getMe();
    }, []);

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
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/search">
                            Search Movie
                        </Nav.Link>
                    </Nav>
                    {/* Right Navbar */}
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/myprofile">
                                    {user?.name}
                                </Nav.Link>
                                <Nav.Link as={Button} onClick={logout}>
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
