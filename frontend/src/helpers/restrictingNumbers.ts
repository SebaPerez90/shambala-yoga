import { ChangeEvent, RefObject } from 'react';

export const restrictingNumbers = (
  e: ChangeEvent<HTMLInputElement>,
  ref: RefObject<HTMLInputElement>,
) => {
  const entries : string = e.target.value;
  const inputTypeText: RefObject<HTMLInputElement> = ref;

  const arrToTest: string[] = entries.split('');
  const onlyStrings: string[] = [];

  for (let i = 0; i < arrToTest.length; i++) {
    if (isNaN(Number(arrToTest[i]))) {
      onlyStrings.push(arrToTest[i]);
      inputTypeText.current!.value = onlyStrings.join('');
    }
  }
};
