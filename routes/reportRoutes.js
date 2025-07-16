import express from "express";
import {getReports, postReport, confirmReportController, deleteReportController } from "../controllers/reportController.js";

const router = express.Router();

router.get("/", getReports);
router.post("/", postReport);
router.put("/:id/confirm", confirmReportController);
router.delete("/:id", deleteReportController);
export default router;

