import { Credential } from "../database/entities/credential.entity";
import { User } from "../database/entities/user.entity";
import { credentialModel } from "../database/models/credential.model";
import { userModel } from "../database/models/user.model";

export const checkCredentials = async (
  loguinData: Credential
): Promise<User | null> => {
  const userToCheck: Credential[] = await credentialModel.find({
    where: {
      password: loguinData.password,
      username: loguinData.username,
    },
  });

  if (userToCheck.length === 0)
    throw new Error("the password or user name is wrong or not exist");

  const user: User | null = await userModel.findOne({
    where: {
      id: userToCheck[0].id,
    },
  });

  return user;
};
