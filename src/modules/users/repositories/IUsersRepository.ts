export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUsersRepository {
  findById(id: string): Promise<IUser>;
}