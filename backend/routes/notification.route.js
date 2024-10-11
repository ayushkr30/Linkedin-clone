import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {
    deleteNotification,
    getUserConnections,
    markNotificatinAsRead,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, markNotificatinAsRead);
router.delete("/:id", protectRoute, deleteNotification);

export default router;
