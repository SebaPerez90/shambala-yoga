import { Dispatch, SetStateAction } from 'react';

export interface ILoguin {
  conectionState?: boolean;
  allInputs: boolean;
  updateInputs: Dispatch<SetStateAction<boolean>>;
  passwordVisibility: boolean;
  updatePassword: Dispatch<SetStateAction<boolean>>;
}

export interface ILoginResponse {
  loguin: string;
  user: {
    birthdate: string;
    email: string;
    id: number;
    nDni: number;
    name: string;
  };
}
