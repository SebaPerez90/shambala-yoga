import express from "express";
import router from "./routes/index";
import cors from "cors";
import morgan from "morgan";

const server = express();

server.use(express());
server.use(cors());
server.use(morgan("dev"));

server.use(router);

export default server;
