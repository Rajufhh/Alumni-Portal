import { Router } from "express";
import { verifyJWT } from "../middlewares/auth/user.middlewares";
import { handleDeleteEvent, handleFetchAllEvents, handleFetchEventsByUser, handlePostEvent, handleUpdateEvent } from "../controllers/auth/event.controller";

const router = Router();

// /api/event

router.get("", verifyJWT, handleFetchAllEvents);
router.get("/:id", verifyJWT, handleFetchEventsByUser);
router.post("/", verifyJWT, handlePostEvent);
router.delete("/:eventId", verifyJWT, handleDeleteEvent);
router.post("/update/:eventId", verifyJWT, handleUpdateEvent);

export default router;