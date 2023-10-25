import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        // Prevent default is to prevent the default behavior
        event.preventDefault();

        // Call the login action from redux action
        dispatch(login(email, password, navigate));
    };

    return (
        <Container className="p-4">
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <div className="row">
                        <div className="col">
                            <Form onSubmit={onSubmit} className="mb-4">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
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
                        </div>
                        <div className="col-auto">OR</div>
                        <div className="col">
                            <GoogleLogin buttonText={"Login with Google"} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
