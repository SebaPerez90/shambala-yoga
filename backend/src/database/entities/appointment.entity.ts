import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  class: string;

  @Column()
  date: string;

  @Column()
  description: string;

  @Column()
  phone: number;

  @Column()
  time: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;

  @ManyToOne(() => User, (user) => user.turns, { cascade: true })
  @JoinColumn({ name: "user_ID" })
  user: User;
}
