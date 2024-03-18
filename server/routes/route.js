import express from "express";
import { addData, getData, getDataById } from "../controller/formController.js";

const router = express.Router();

router.post("/addData", addData);
router.get("/data/", getData);
router.get("/data/:id", getDataById);

export default router;
