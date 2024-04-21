"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const user_entity_1 = require("../entities/user.entity");
const credential_entity_1 = require("../entities/credential.entity");
const appointment_entity_1 = require("../entities/appointment.entity");
(0, dotenv_1.config)();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Greedisgoodd1234_",
    database: "henry",
    synchronize: true,
    // dropSchema: true,
    logging: ["error"],
    entities: [user_entity_1.User, credential_entity_1.Credential, appointment_entity_1.Appointment],
    subscribers: [],
    migrations: [],
});
