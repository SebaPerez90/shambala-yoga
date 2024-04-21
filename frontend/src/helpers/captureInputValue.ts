import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const captureValue = <T>(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  formData: T,
  stateAction: Dispatch<SetStateAction<T>>,
) => {
  const value: string = e.target.value;
  stateAction({ ...formData, [e.target.name]: value });
};
