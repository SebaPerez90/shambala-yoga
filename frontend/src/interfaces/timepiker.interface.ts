import { Dispatch, SetStateAction } from 'react';

export interface ITimePicker {
  selectedSchedule: string;
  setSelectedSchedule: Dispatch<SetStateAction<string>>;
}
