import { ChangeEvent, RefObject } from 'react';

export const checkEmailEntry = (
  e: ChangeEvent<HTMLInputElement>,
  HTMLElement: RefObject<HTMLSpanElement>,
) => {
  const email = e.target.value;
  const regExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const verificar = regExp.test(email);

  verificar || !e.target.value
    ? (HTMLElement.current!.style.opacity = '0')
    : (HTMLElement.current!.style.opacity = '1');
};
