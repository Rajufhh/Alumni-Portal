import { Router } from 'express'
import { handleDeleteJob, handleFetchAllJobs, handleFetchJobsByUser, handlePostJob, handleUpdateJobPost } from '../controllers/auth/job.controller';
import { verifyJWT } from '../middlewares/auth/user.middlewares';

const router = Router();

// /api/job/
router.get("/", verifyJWT, handleFetchAllJobs);
router.get("/:id", verifyJWT, handleFetchJobsByUser);
router.post("/", verifyJWT, handlePostJob);
router.delete("/:jobId", verifyJWT, handleDeleteJob);
router.post("/update/:jobId", verifyJWT, handleUpdateJobPost);

export default router;