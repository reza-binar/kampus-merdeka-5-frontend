import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { createNewMessage } from "../redux/actions/messageActions";

function AddMessage({ socket }) {
  const dispatch = useDispatch();

  const [addMessage, setAddMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (addMessage === "") {
      toast.error("Message can not be empty!");
      return;
    }

    dispatch(createNewMessage(addMessage));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row className="g-2 mt-4">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Add Message">
            <Form.Control
              type="text"
              placeholder="Add message"
              value={addMessage}
              onChange={(e) => {
                setAddMessage(e.target.value);
                socket.emit("typing");
              }}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg">
              Add Message
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default AddMessage;
