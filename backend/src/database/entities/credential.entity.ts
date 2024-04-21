import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "credentials",
})
export class Credential {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 20, unique: true })
  username: string;

  @Column({ type: "varchar", length: 50 })
  password: string;
}
