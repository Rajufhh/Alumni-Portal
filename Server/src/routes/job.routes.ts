import { Router } from 'express'
import { handleDeleteJob, handleFetchAllJobs, handleFetchJobsByUser, handlePostJob, handleUpdateJobPost } from '../controllers/job.controller';
import { verifyJWT, verifyPermission } from '../middlewares/auth/user.middlewares';

const router = Router();

// /api/job/
router.get("/", verifyJWT, handleFetchAllJobs);
router.get("/:id", verifyJWT, verifyPermission(["admin", "alumni"]), handleFetchJobsByUser);
router.post("/", verifyJWT, verifyPermission(["alumni", "admin"]), handlePostJob);
router.delete("/:jobId", verifyJWT, verifyPermission(["admin", "alumni"]), handleDeleteJob);
router.put("/update/:jobId", verifyJWT, verifyPermission(["admin", "alumni"]), handleUpdateJobPost);

export default router;