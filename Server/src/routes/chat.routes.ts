import express from "express";
import {
  handlegetAllChats,
  handleFetchUsers,
  handleFetchOrCreateNewChat,
  handleDeleteChat,
  handleResetUnreadCount,
} from "../controllers/chat.controller";
import { verifyJWT } from "../middlewares/auth/user.middlewares";

const router = express.Router();

router.use(verifyJWT);
router.get("/", handlegetAllChats);
router.get("/users", handleFetchUsers);
router.post("/c/:receiverId", handleFetchOrCreateNewChat);
router.delete("/:chatId", handleDeleteChat);
router.put("/:chatId/reset-unread", handleResetUnreadCount);

export default router;
