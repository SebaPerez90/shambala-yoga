import { Credential } from "../database/entities/credential.entity";
import { User } from "../database/entities/user.entity";
import { userModel } from "../database/models/user.model";
import { UserDto } from "../dto/user.dto";

//!-----------------------DATABASE INTEGRATION-------------------------------------->
export const createUserService = async (userData: UserDto): Promise<User> => {
  const newUser: User = new User();
  const newCredential: Credential = new Credential();

  newCredential.username = userData.username;
  newCredential.password = userData.password;

  newUser.name = userData.name;
  newUser.email = userData.email;
  newUser.birthdate = userData.birthdate;
  newUser.nDni = userData.nDni;
  newUser.credentialsID = newCredential;

  await userModel.save(newUser);
  return newUser;
};

export const getAllUserSerivce = async (): Promise<User[]> => {
  const users: User[] = await userModel.find();

  return users;
};

export const getUserByIDService = async (
  id: number
): Promise<User | undefined> => {
  const foundUser: User | null = await userModel.findOne({
    where: { id: id },
    relations: {
      turns: true,
    },
  });
  if (foundUser) return foundUser;
};

/* 
!----------------------- WITHOUT DATABASE -------------------------------------->
import { IUser } from "../interfaces/interfaces";

const users: IUser[] = [];
let id: number = 1;

export const getAllUserSerivce = async (): Promise<IUser[]> => {
  return users;
};

export const getUserByIDService = async (
  id: number
): Promise<IUser | undefined> => {
  const foundUser: IUser | undefined = users.find((user) => user.id === id);
  if (foundUser) return foundUser;
};

export const createUserService = async (userData: IUser): Promise<IUser> => {
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentialsId: userData.credentialsId,
  };
  id++;
  users.push(newUser);
  return newUser;
};

*/
