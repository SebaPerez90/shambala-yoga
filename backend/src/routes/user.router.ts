import { Router } from "express";
import {
  getAllUser,
  getUserByID,
  createUser,
  loguinUser,
} from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.get("/users", getAllUser);
userRouter.get("/users/:id", getUserByID);
userRouter.post("/users/register", createUser);
userRouter.post("/users/loguin", loguinUser);

export default userRouter;
