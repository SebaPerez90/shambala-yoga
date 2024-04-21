import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const lengthTextControl = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setChartLength: Dispatch<SetStateAction<number>>,
) => {
  setChartLength(e.target.selectionEnd);
};
