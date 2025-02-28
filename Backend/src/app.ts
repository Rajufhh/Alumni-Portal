import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
);

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hi there!");
})

export default app;