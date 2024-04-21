import { Dispatch, RefObject, SetStateAction } from 'react';

export const showPassword = (
  state: boolean,
  updateFunc: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLInputElement>,
) => {
  state ? (ref.current!.type = 'text') : (ref.current!.type = 'password');
  updateFunc(!state);
};
