import { Dispatch, SetStateAction } from 'react';
import { IUserDto } from '../dto/user.dto';
import { IAppointmentDto } from '../dto/appointment.dto';

export const checkAllInputs = (
  formData: IUserDto | IAppointmentDto,
  stateAction: Dispatch<SetStateAction<boolean>>,
) => {
  const formValues = Object.values(formData);
  const notNull = formValues.every((value) => {
    if (typeof value === 'string') {
      return value.trim() !== '';
    } else {
      return value !== null && value !== undefined;
    }
  });

  notNull ? stateAction(false) : stateAction(true);
};
