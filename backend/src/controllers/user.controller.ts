import { Request, Response } from "express";
import {
  getAllUserSerivce,
  getUserByIDService,
  createUserService,
} from "../services/user.services";
import { User } from "../database/entities/user.entity";
import { checkCredentials } from "../services/credential.services";

//!-----------------------DATABASE INTEGRATION-------------------------------------->

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: User = await createUserService(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUserSerivce();
    users.length === 0
      ? res.status(404).json({ message: "the users list is still empty" })
      : res.status(200).json(users);
  } catch (error) {
    res.status(200).json({ error: (error as Error).message });
  }
};

export const getUserByID = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id))
      return res
        .status(400)
        .json({ message: "Invalid ID format. ID must be a number." });

    const userFound = await getUserByIDService(id);

    userFound
      ? res.status(200).json(userFound)
      : res.status(404).json({ message: "user not found or not exist" });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const loguinUser = async (req: Request, res: Response) => {
  try {
    const user = await checkCredentials(req.body);
    res.status(200).json({ loguin: "TRUE", user });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

/* 
!----------------------- WITHOUT DATABASE -------------------------------------->

import { IUser } from "../interfaces/interfaces";

export const getAllUser = async (req: Request, res: Response) => {
  const users: IUser[] = await getAllUserSerivce();
  try {
    if (users.length === 0)
      return res.status(404).json({ message: "the data base is still empty" });
    res.status(200).json(users);
  } catch (error) {
    res.status(200).json({ error: (error as Error).message });
  }
};

export const getUserByID = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id))
      return res
        .status(400)
        .json({ message: "Invalid ID format. ID must be a number." });

    const userFound: IUser | undefined = await getUserByIDService(id);

    if (userFound) {
      res.status(200).json(userFound);
    } else {
      res.status(404).json({ message: "user not found or not exist" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user: IUser = await createUserService(req.body);
  res.status(201).json(user);
};

export const loguinUser = async (req: Request, res: Response) => {
  res.send("user logged in");
};

*/
