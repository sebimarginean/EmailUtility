import express from "express";
import { contact } from "../controllers/contactController.js";
import { applyToJob } from "../controllers/applyToJobController.js";

const router = express.Router();

router.post("/contact", contact);
router.post("/applyToJob", applyToJob);

export default router;
