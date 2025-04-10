import { Router } from 'express'
import { handleDeleteJob, handleFetchAllJobs, handleFetchJobById, handleFetchJobsByUser, handlePostJob, handleUpdateJobPost } from '../controllers/job.controller';
import { verifyJWT, verifyPermission } from '../middlewares/auth/user.middlewares';

const router = Router();

// /api/job/
router.get("/", verifyJWT, handleFetchAllJobs);
router.get("/user/:id", verifyJWT, verifyPermission(["admin", "alumni"]), handleFetchJobsByUser);
router.get("/:jobId", verifyJWT, handleFetchJobById);
router.post("/", verifyJWT, verifyPermission(["alumni", "admin"]), handlePostJob);
router.delete("/:jobId", verifyJWT, verifyPermission(["admin", "alumni"]), handleDeleteJob);
router.put("/:jobId", verifyJWT, verifyPermission(["admin", "alumni"]), handleUpdateJobPost);

export default router;