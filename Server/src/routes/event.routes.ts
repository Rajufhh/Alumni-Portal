import { Router } from "express";
import { verifyJWT, verifyPermission } from "../middlewares/auth/user.middlewares";
import { handleDeleteEvent, handleFetchAllEvents, handleFetchEventsByUser, handleFetchRsvpdEvents, handlePostEvent, handleRemoveRsvp, handleRsvpForEvent, handleUpdateEvent } from "../controllers/event.controller";

const router = Router();

// /api/event

// Routes accessible by all authenticated users (including students)
router.get("/", verifyJWT, handleFetchAllEvents);
router.post("/register/:eventId", verifyJWT, handleRsvpForEvent);
router.put("/register/:eventId", verifyJWT, handleRemoveRsvp);
router.get("/fetch/rsvp", verifyJWT, handleFetchRsvpdEvents);

// Routes restricted to alumni and admin only
router.get("/user/:id", verifyJWT, verifyPermission(["alumni", "admin"]), handleFetchEventsByUser);
router.get("/:eventId", verifyJWT, verifyPermission(["alumni", "admin"]), handleFetchEventsByUser);
router.post("/", verifyJWT, verifyPermission(["alumni", "admin"]), handlePostEvent);
router.delete("/:eventId", verifyJWT, verifyPermission(["alumni", "admin"]), handleDeleteEvent);
router.post("/update/:eventId", verifyJWT, verifyPermission(["alumni", "admin"]), handleUpdateEvent);

export default router;