import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.send("welcome to my second API");
});

export default router;
