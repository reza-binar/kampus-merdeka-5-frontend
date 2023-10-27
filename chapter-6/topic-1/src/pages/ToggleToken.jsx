import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setTokenAction } from "../redux/actions/authActions";

const ToggleToken = () => {
    const fixedToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkZhaG1pIEFsZmFyZXphIiwiZW1haWwiOiJmYWxmYXJlemFAYmluYXJhY2FkZW15Lm9yZyIsImlhdCI6MTY5ODI0NTgwOX0.e75xZCNZXC9wWoXeIPQ0SzuAPI5vxCYkD-oo-fqT6Rs";

    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.auth);

    const onToggleToken = () => {
        let changedToken;

        if (token) changedToken = null;
        if (!token) changedToken = fixedToken;

        dispatch(setTokenAction(changedToken));
    };

    return (
        <Container>
            <Row>
                <Col className="mx-auto">
                    <h1>Token: {token}</h1>
                    <Button onClick={onToggleToken}>Toggle Token</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ToggleToken;
