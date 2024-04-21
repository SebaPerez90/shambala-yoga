"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const data_source_1 = require("./database/config/data-source");
require("reflect-metadata");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
data_source_1.AppDataSource.initialize().then((res) => {
    console.log("data base conection was successfully");
    server_1.default.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`);
    });
});
