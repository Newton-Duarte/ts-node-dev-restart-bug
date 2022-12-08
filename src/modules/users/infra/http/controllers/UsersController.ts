import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserUseCase } from '@modules/users/useCases/FindUser/FindUserUseCase';

export class UsersController {
  async index(request: Request, response: Response) {
    const findUserUseCase = container.resolve(FindUserUseCase);
    const result = await findUserUseCase.execute();

    return response.json(result);
  }
}
