import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
                {
                    email,
                    password,
                }
            );
            const { data } = response.data;
            const { token } = data;

            // Save our token
            localStorage.setItem("token", token);

            // Redirect to home
            // navigate("/");

            // Redirect to home or reload the home
            // This is temporary solution, the better solution is using redux
            window.location.replace("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error?.response?.data?.message);
                return;
            }

            alert(error?.message);
        }
    };

    return (
        <Container className="p-4">
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
