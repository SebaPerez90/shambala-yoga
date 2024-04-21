import { DataSource } from "typeorm";
import { config } from "dotenv";
import { User } from "../entities/user.entity";
import { Credential } from "../entities/credential.entity";
import { Appointment } from "../entities/appointment.entity";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Greedisgoodd1234_",
  database: "henry",
  synchronize: true,
  // dropSchema: true,
  logging: ["error"],
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});

