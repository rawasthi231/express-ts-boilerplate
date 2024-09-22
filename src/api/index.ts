import express from "express";

import AuthController from "./auth";

const router = express.Router();

router.post("/auth/signup", AuthController.signup);
router.post("/auth/login", AuthController.login);
router.post("/auth/logout", AuthController.logout);

export default router;
