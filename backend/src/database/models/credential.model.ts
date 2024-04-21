import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/credential.entity";

export const credentialModel = AppDataSource.getRepository(Credential);
