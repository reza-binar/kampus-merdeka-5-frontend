import { useEffect, useState } from "react";
import { io } from "socket.io-client"; // This socket.io package
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
    addMessageFromWebsocket,
    getAllMessages,
} from "../redux/actions/messageActions";
import MessageItem from "../components/MessageItem";
import AddMessage from "../components/AddMessage";

// Initialization connect to backend websocket (socket.io)
const socket = io(import.meta.env.VITE_WEBSOCKET_API);

function Home() {
    const dispatch = useDispatch();

    const { messages } = useSelector((state) => state.message);

    const [typing, setTyping] = useState(false);

    // This useEffect will get all messages from backend
    useEffect(() => {
        // Dispatch the getAllMessages actions
        dispatch(getAllMessages());
    }, [dispatch]);

    // This useEffect is to connect to backend websocket (socket.io)
    useEffect(() => {
        // Connect to backend
        socket.on("connect", () => {});

        // It will listen the event name "message"
        socket.on("message", (message) => {
            dispatch(addMessageFromWebsocket(message));
        });

        socket.on("ontyping", () => {
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
            }, 1000);
        });

        socket.on("helmi", (data) => {
            console.log(data);
            alert("aku dicoba-coba", data);
        });

        socket.emit("akudarireact", {
            name: "Reza",
        });
    }, [dispatch]);

    return (
        <>
            <Row className="mt-4">
                <Col>
                    <h6>{typing && "seseorang sedang mengetik...."}</h6>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    {messages.length > 0 &&
                        messages.map((message) => (
                            <MessageItem data={message} key={message.id} />
                        ))}
                </Col>

                <AddMessage socket={socket} />
            </Row>
        </>
    );
}

export default Home;
