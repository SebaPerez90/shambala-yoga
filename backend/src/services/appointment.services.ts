import { Appointment, Status } from "../database/entities/appointment.entity";
import { appointmentModel } from "../database/models/appointment.model";
import { userModel } from "../database/models/user.model";
import { AppointmentDto } from "../dto/appoitnment.dto";
import { User } from "../database/entities/user.entity";

//!-----------------------DATABASE INTEGRATION-------------------------------------->

export const getAllTurnsService = async (): Promise<Appointment[]> => {
  const allTurns: Appointment[] = await appointmentModel.find({
    relations: {
      user: true,
    },
  });
  return allTurns;
};

export const getTurnsByIDService = async (
  id: number
): Promise<Appointment | null> => {
  const turnFound: Appointment | null = await appointmentModel.findOne({
    where: { id: id },
  });
  return turnFound;
};

export const reserveTurnService = async (
  turnData: AppointmentDto
): Promise<Appointment> => {
  const newTurn: Appointment = new Appointment();
  const user: User | null = await userModel.findOneBy({ id: turnData.userID });

  if (user) {
    newTurn.class = turnData.class;
    newTurn.date = turnData.date;
    newTurn.description = turnData.description;
    newTurn.phone = Number(turnData.phone);
    newTurn.time = turnData.time;
    newTurn.user = user;
    await appointmentModel.save(newTurn);
  } else throw new Error(`the user with ${turnData.userID} not exist`);

  return newTurn;
};

export const updateTurnService = async (id: number) => {
  const turnToUpdate = await appointmentModel.findOne({
    where: { id: id },
  });

  if (turnToUpdate && turnToUpdate.status === "active") {
    turnToUpdate.status = Status.INACTIVE;
    await appointmentModel.save(turnToUpdate);
  } else {
    throw new Error(`the turn with ${id} not exist`);
  }
  return turnToUpdate;
};

/*
!----------------------- WITHOUT DATABASE -------------------------------------->
import { IAppointment } from "../interfaces/interfaces";

const appointments: IAppointment[] = [];
let id: number = 1;

export const getAllTurnsService = async (): Promise<IAppointment[]> => {
  return appointments;
};


export const getTurnsByIDService = async (
  id: number
): Promise<IAppointment | undefined> => {
  const turnFound: IAppointment | undefined = appointments.find(
    (appointment) => appointment.id === id
  );
  if (turnFound) return turnFound;
};

export const reserveTurnService = async (
  turnData: IAppointment
): Promise<IAppointment> => {
  const newAppointment: IAppointment = {
    id,
    date: turnData.date,
    time: turnData.time,
    status: turnData.status,
    userId: turnData.userId,
  };
  id++;
  appointments.push(newAppointment);
  return newAppointment;
};


export const cancelTurnService = async (
  id: number
): Promise<IAppointment | undefined> => {
  const turnFound: IAppointment | undefined = appointments.find(
    (appointment) => appointment.id === id
  );
  if (turnFound) {
    appointments.splice(appointments.indexOf(turnFound), 1);
    return turnFound;
  }
};
*/
