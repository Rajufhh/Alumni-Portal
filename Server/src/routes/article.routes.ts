import { Router } from "express"; 
import { handleDeleteArticle, handleFetchAllArticles, handleFetchArticlesByUser, handlePostArticle, handleUpdateArticle } from "../controllers/article.controller";
import { verifyJWT, verifyPermission } from "../middlewares/auth/user.middlewares";

const router = Router();

router.get("/", verifyJWT, handleFetchAllArticles);
router.get("/:userId", verifyJWT, verifyPermission(["alumni", "admin"]), handleFetchArticlesByUser);
router.post("/", verifyJWT, verifyPermission(["alumni", "admin"]), handlePostArticle);
router.delete("/:articleId", verifyJWT, verifyPermission(["alumni", "admin"]), handleDeleteArticle);
router.put("/:articleId", verifyJWT, verifyPermission(["alumni", "admin"]), handleUpdateArticle);

export default router;