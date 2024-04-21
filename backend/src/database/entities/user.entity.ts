import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Credential } from "./credential.entity";
import { Appointment } from "./appointment.entity";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "varchar", length: 100})
  email: string;

  @Column({ type: "varchar", length: 50 })
  birthdate: string;

  @Column({ type: "int" })
  nDni: number;

  @OneToOne(() => Credential, {
    cascade: true,
  })
  @JoinColumn({ name: "credential_id" })
  credentialsID: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  turns: Appointment[];
}
