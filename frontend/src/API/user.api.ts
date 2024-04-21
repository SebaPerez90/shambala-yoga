import { IUserDto } from '../dto/user.dto';
import { ILoguinDto } from '../dto/loguin.dto';
import { ILoginResponse } from '../interfaces/loguin.interface';
import { SetStateAction, Dispatch } from 'react';
import { ITurns } from '../interfaces/turns.interface';

export const getAllUsers = async (): Promise<IUserDto | undefined> => {
  const response: Response = await fetch('http://localhost:3000/users/');
  try {
    const data: IUserDto = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByID = async (
  id: string,
  updateTurns: Dispatch<SetStateAction<ITurns[] | null>>,
): Promise<IUserDto | undefined> => {
  try {
    const response: Response = await fetch(`http://localhost:3000/users/${id}`);

    if (response.status === 200) {
      const data: IUserDto = await response.json();
      if (data.turns) updateTurns(data.turns);
      return data;
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const registerUser = async (userData: IUserDto) => {
  try {
    const response: Response = await fetch(
      'http://localhost:3000/users/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
          name: userData.name,
          email: userData.email,
          birthdate: userData.birthdate,
          nDni: userData.nDni,
        }),
      },
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const loguinUser = async (loguinData: ILoguinDto) => {
  try {
    const response: Response = await fetch(
      'http://localhost:3000/users/loguin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loguinData.username,
          password: loguinData.password,
        }),
      },
    );

    const data: ILoginResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error((error as Error).message);
  }
};
