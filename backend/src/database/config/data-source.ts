import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.POSTGRESQL_PASSWORD,
  database: "users",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
