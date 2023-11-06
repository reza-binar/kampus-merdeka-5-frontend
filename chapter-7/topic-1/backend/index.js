const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const messages = require("./messages");

const PORT = process.env.PORT || 4000;

const app = express();
const httpServer = createServer(app);
const options = {
    cors: {
        origin: "*",
        methods: "*",
    },
};
const io = new Server(httpServer, options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using socket.io to controllers
app.use(async function (req, res, next) {
    req.io = io;
    next();
});

app.get("/api/v1/messages", (req, res) => {
    res.status(200).json({
        data: messages,
    });
});

app.post("/api/v1/messages", (req, res) => {
    if (!req.body.message) {
        return res.status(400).json({
            message: "Message is required",
        });
    }

    const message = {
        id: uuidv4(),
        message: req.body.message,
    };

    messages.push(message);

    // Emit event
    req.io.emit("message", message);

    res.status(200).json({
        data: message,
    });
});

app.get("/coba", (req, res) => {
    req.io.emit("helmi", {
        name: "Helmi",
    });

    res.status(200).json({
        data: true,
    });
});

io.on("connection", (socket) => {
    console.log(socket.id + " connected!");

    /* ... */
    socket.on("disconnect", (reason) => {
        console.log(socket.id + " disconnected because " + reason);
    });

    socket.on("typing", () => {
        io.emit("ontyping");
    });

    socket.on("akudarireact", (data) => {
        console.log("aku dari react", data);
    });
});

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
