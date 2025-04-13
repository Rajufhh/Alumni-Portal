import { Router } from 'express'
import { handleDeleteJob, handleFetchAllJobs, handleFetchJobById, handleFetchJobsByUser, handlePostJob, handleUpdateJobPost } from '../controllers/job.controller';
import { verifyJWT, verifyPermission } from '../middlewares/auth/user.middlewares';

const router = Router();

// /api/job/
// Routes accessible by all authenticated users (including students)
router.get("/", verifyJWT, handleFetchAllJobs);
router.get("/:jobId", verifyJWT, handleFetchJobById);

// Routes restricted to alumni and admin only
router.get("/user/:id", verifyJWT, verifyPermission(["admin", "alumni"]), handleFetchJobsByUser);
router.post("/", verifyJWT, verifyPermission(["alumni", "admin"]), handlePostJob);
router.delete("/:jobId", verifyJWT, verifyPermission(["admin", "alumni"]), handleDeleteJob);
router.put("/:jobId", verifyJWT, verifyPermission(["admin", "alumni"]), handleUpdateJobPost);

export default router;