import server from "./server";
import { AppDataSource } from "./database/config/data-source";
import "reflect-metadata";
import { config } from "dotenv";

config();

AppDataSource.initialize()
  .then((res) => {
    console.log("data base conection was successfully");
    server.listen(process.env.PORT, () => {
      console.log(`server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
