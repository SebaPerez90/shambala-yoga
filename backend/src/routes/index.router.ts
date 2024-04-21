import { Router, Request, Response } from "express";
import userRouter from "./user.router";
import appointmentRouter from "./appointment.router";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World! 🤙");
});

router.use(userRouter);
router.use(appointmentRouter);

export default router;
