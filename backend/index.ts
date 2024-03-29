import server from "./src/server";
import "reflect-metadata";
import { AppDataSource } from "./src/database/config/data-source";

AppDataSource.initialize().then((_res) => {
  console.log("data base conection was successfully");
  server.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
  });
});
