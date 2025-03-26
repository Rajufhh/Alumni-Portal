import { Router } from "express";
import { verifyJWT } from "../middlewares/auth/user.middlewares";
import { handleDeleteComment, handleFetchAllPostComments, handleFetchUserComments, handlePostComment, handleUpdateComment } from "../controllers/comment.controller";

const router = Router();

// /api/comment

router.post("/", verifyJWT, handlePostComment);
router.delete("/:commentId", verifyJWT, handleDeleteComment);
router.put("/:commentId", verifyJWT, handleUpdateComment);
router.get("/user/:userId", verifyJWT, handleFetchUserComments);
router.get("/post/:postId", verifyJWT, handleFetchAllPostComments);

export default router;