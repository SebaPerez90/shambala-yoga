import { Request, Response } from "express";
import {
  getAllTurnsService,
  getTurnsByIDService,
  reserveTurnService,
  updateTurnService,
} from "../services/appointment.services";
import { Appointment } from "../database/entities/appointment.entity";
import { DeleteResult } from "typeorm";

//!-----------------------DATABASE INTEGRATION-------------------------------------->

export const getAllTurns = async (req: Request, res: Response) => {
  try {
    const allTurns: Appointment[] = await getAllTurnsService();

    allTurns.length === 0
      ? res
          .status(404)
          .json({ message: "the appointments list is still empty" })
      : res.status(200).json(allTurns);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTurnByID = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id))
      return res
        .status(400)
        .json({ message: "Invalid ID format. ID must be a number." });

    const turnFound: Appointment | null = await getTurnsByIDService(id);
    turnFound
      ? res.status(200).json(turnFound)
      : res.status(404).json({ message: "turn not found or not exist" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const reserveTurn = async (req: Request, res: Response) => {
  try {
    const newTurn: Appointment = await reserveTurnService(req.body);

    newTurn.user
      ? res.status(201).json({ success_message: newTurn })
      : res.status(400).json({
          message:
            "The missing appointment information needed to make the booking.",
        });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const cancelTurn = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id))
      return res
        .status(404)
        .json({ message: "Invalid ID format. ID must be a number." });
        
    const turnToUpdate = await updateTurnService(id);

    turnToUpdate
      ? res.status(200).json({ success_message: turnToUpdate })
      : res.status(404).json({ message: "turn not found or not exist" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// export const cancelTurn = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params.id);

//     if (isNaN(id))
//       return res
//         .status(404)
//         .json({ message: "Invalid ID format. ID must be a number." });

//     const turnToCancel: DeleteResult | undefined = await cancelTurnService(id);
//     res.status(200).json({
//       message: "your appointment was cancelled",
//       result_affected: turnToCancel?.affected,
//     });
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// };

/*
!----------------------- WITHOUT DATABASE -------------------------------------->
import { IAppointment } from "../interfaces/interfaces";

export const getAllTurns = async (req: Request, res: Response) => {
  const turns: IAppointment[] = await getAllTurnsService();

  try {
    if (turns.length === 0)
      return res
        .status(404)
        .json({ message: "the appointments list is still empty" });
    res.status(200).json(turns);
  } catch (error) {
    res.status(200).json({ error: (error as Error).message });
  }
};


export const getTurnByID = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id))
      return res
        .status(400)
        .json({ message: "Invalid ID format. ID must be a number." });

    const turnFound = await getTurnsByIDService(id);

    if (turnFound) {
      res.status(200).json(turnFound);
    } else {
      res.status(404).json({ message: "turn not found or not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const reserveTurn = async (req: Request, res: Response) => {
  const newAppointment = await reserveTurnService(req.body);
  res.status(201).json(newAppointment);
};

export const cancelTurn = async (req: Request, res: Response) => {
  try {
    const turnID = parseInt(req.params.id);

    if (isNaN(turnID))
      res
        .status(400)
        .json({ message: "somethig goes to wrong in cancel process" });

    const turnFound = await cancelTurnService(turnID);
    if (turnFound) {
      res
        .status(200)
        .json({ message: "turn cancelled succesfully", turnFound });
    } else {
      res.status(404).json({ message: "turn not found or not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

*/
