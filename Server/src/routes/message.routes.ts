import { Router } from "express";
import {
  handleFetchMessagesByChatId,
  handleSendMessage,
  handleDeleteMessage,
  handleEditMessage,
} from "../controllers/message.controller";
import { verifyJWT } from "../middlewares/auth/user.middlewares";

const router = Router();

router.use(verifyJWT);

router.get("/:chatId", handleFetchMessagesByChatId);
router.post("/:chatId", handleSendMessage);
router.put("/edit/:messageId", handleEditMessage);
router.delete("/:messageId", handleDeleteMessage);

export default router;
