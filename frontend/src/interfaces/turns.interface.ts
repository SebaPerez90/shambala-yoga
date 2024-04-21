import { IUserDto } from '../dto/user.dto';

export interface ITurns {
  time: string;
  date: string;
  description: string;
  phone: number;
  class: string;
  id: number;
  status: string;
}

export interface ITurnsDto {
  id: number;
  class: string;
  date: string;
  description: string;
  phone: number;
  time: string;
  status: string;
  user: IUserDto;
}
