import { Dispatch, SetStateAction } from 'react';
import { IAppointmentDto } from '../dto/appointment.dto';

export const createAppointment = async (appointmentData: IAppointmentDto) => {
  try {
    const response: Response = await fetch(
      'http://localhost:3000/appointments/schedule',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          time: appointmentData.time,
          date: appointmentData.date,
          description: appointmentData.description,
          phone: appointmentData.phone,
          class: appointmentData.class,
          userID: appointmentData.userID,
        }),
      },
    );

    const data: IAppointmentDto = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const getAllTurns = async <T>(
  updateAllTurns: Dispatch<SetStateAction<T>>,
) => {
  const response: Response = await fetch('http://localhost:3000/appointments/');
  try {
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      updateAllTurns(data);
      return data;
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};
