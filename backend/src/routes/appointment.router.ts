import { Router } from "express";
import {
  getAllTurns,
  getTurnByID,
  reserveTurn,
  cancelTurn,
} from "../controllers/appointment.controller";

const appointmentRouter: Router = Router();

appointmentRouter.get("/appointments", getAllTurns);
appointmentRouter.get("/appointments/:id", getTurnByID);
appointmentRouter.post("/appointments/schedule", reserveTurn);
appointmentRouter.put("/appointments/cancel/:id", cancelTurn);

export default appointmentRouter;
