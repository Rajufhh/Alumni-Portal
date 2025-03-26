import { Router } from "express";
import { verifyJWT } from "../middlewares/auth/user.middlewares";
import { handleGetAllPostsLikedByUser, handleGetLikesOnPost, handleLikePost, handleUnlikePost } from "../controllers/like.controller";

const router = Router();

// /api/like/

router.post("/:postId", verifyJWT, handleLikePost);
router.delete("/:postId", verifyJWT, handleUnlikePost);
router.get("/:postId", verifyJWT, handleGetLikesOnPost);
router.get("/user", verifyJWT, handleGetAllPostsLikedByUser);

export default router;