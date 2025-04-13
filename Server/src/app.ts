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

import userRouter from './routes/user.routes'
import jobRouter from './routes/job.routes'
import eventRouter from './routes/event.routes'
import likeRouter from './routes/like.routes'
import donationRouter from './routes/donation.routes'
import mentorshipRouter from './routes/mentorship.routes'
import commentRouter from './routes/comment.routes'
import tweetRouter from './routes/tweet.routes'
import chatRouter from './routes/chat.routes'
import messageRouter from './routes/message.routes'

app.use("/api", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/event", eventRouter);
app.use("/api/like", likeRouter);
app.use("/api/donation", donationRouter);
app.use("/api/mentorship", mentorshipRouter);
app.use("/api/comment", commentRouter);
app.use("/api/tweets", tweetRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

export default app;
