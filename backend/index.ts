import server from "./src/server";
import { AppDataSource } from "./src/database/config/data-source";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize().then((_res) => {
  console.log("data base conection was successfully");
  server.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
  });
});
