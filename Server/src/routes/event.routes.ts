import { Router } from "express";
import { verifyJWT, verifyPermission } from "../middlewares/auth/user.middlewares";
import { handleDeleteEvent, handleFetchAllEvents, handleFetchEventsByUser, handleFetchRsvpdEvents, handlePostEvent, handleRemoveRsvp, handleRsvpForEvent, handleUpdateEvent } from "../controllers/event.controller";

const router = Router();

// /api/event

router.get("", verifyJWT, handleFetchAllEvents);
router.get("/:id", verifyJWT, verifyPermission(["alumni", "admin"]), handleFetchEventsByUser);
router.post("/", verifyJWT, verifyPermission(["alumni", "admin"]), handlePostEvent);
router.delete("/:eventId", verifyJWT, verifyPermission(["alumni", "admin"]), handleDeleteEvent);
router.post("/update/:eventId", verifyJWT, verifyPermission(["alumni", "admin"]), handleUpdateEvent);
router.post("/register/:eventId", verifyJWT, handleRsvpForEvent);
router.put("/register/:eventId", verifyJWT, handleRemoveRsvp);
router.get("/fetch/rsvp", verifyJWT, handleFetchRsvpdEvents);

export default router;