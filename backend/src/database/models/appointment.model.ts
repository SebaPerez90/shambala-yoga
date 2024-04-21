import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/appointment.entity";

export const appointmentModel = AppDataSource.getRepository(Appointment);
