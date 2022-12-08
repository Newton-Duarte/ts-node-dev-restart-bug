import { prisma } from "@shared/database";
import { IUser, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async findById(id: string): Promise<IUser> {
    const user = await prisma.users.findFirst({
      where: { id }
    });

    return user;
  }
}